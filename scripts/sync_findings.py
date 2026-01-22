#!/usr/bin/env python3
"""
Sync findings from FINDINGS_REGISTRY/*.md to findings.json for the website.
This script parses the markdown registry files and generates JSON entries.
"""

import json
import re
import os
from pathlib import Path

# Paths
REPO_ROOT = Path("/Users/johntregoning/My Drive/Thomson_Case_Repository")
REGISTRY_DIR = REPO_ROOT / "00_MASTER_INDEX" / "FINDINGS_REGISTRY"
FINDINGS_JSON = REPO_ROOT / "16_CASE_EXHIBIT_SITE" / "src" / "data" / "findings.json"

# Category mapping from registry files
CATEGORY_MAP = {
    "01_DISCREPANCY.md": "DISCREPANCY",
    "02_FABRICATION.md": "FABRICATION",
    "03_WITNESS.md": "WITNESS",
    "04_VINDICATION.md": "VINDICATION",
    "05_BREACH.md": "BREACH",
    "06_CAUSATION.md": "CAUSATION",
    "07_QUANTUM.md": "QUANTUM",
    "08_PROCEDURAL.md": "PROCEDURAL",
    "09_NEUROLOGICAL.md": "NEUROLOGICAL",
    "10_MEDICATION.md": "MEDICATION",
    "11_FND_SOMATOFORM.md": "FND/SOMATOFORM",
    "12_KARUNARATNE.md": "VINDICATION",  # Karunaratne findings are vindication
}

def parse_finding_from_markdown(text, default_category):
    """Parse a finding block from markdown into a dict."""
    finding = {}

    # Extract ID from header
    id_match = re.search(r'## (F[-\d\w]+)', text)
    if id_match:
        finding['id'] = id_match.group(1)
    else:
        return None

    # Extract title from header line
    title_match = re.search(r'## F[-\d\w]+ - (.+?)(?:\s*⭐|$)', text.split('\n')[0])
    if title_match:
        finding['title'] = title_match.group(1).strip()
    else:
        finding['title'] = f"Finding {finding['id']}"

    # Parse table fields
    table_pattern = r'\|\s*\*\*([^|]+)\*\*\s*\|\s*(.+?)\s*\|'
    for match in re.finditer(table_pattern, text):
        field = match.group(1).strip()
        value = match.group(2).strip()

        if field == "Date Found":
            finding['dateFound'] = value
        elif field == "Date of Event":
            finding['date'] = value
        elif field == "Evidence Status":
            # Clean up status
            status = value.replace("**", "").replace("VERIFIED BY GEMINI", "VERIFIED").strip()
            if "VERIFIED" in status:
                finding['evidenceStatus'] = "VERIFIED"
            elif "SUPPORTED" in status:
                finding['evidenceStatus'] = "SUPPORTED"
            elif "CONTRADICTED" in status:
                finding['evidenceStatus'] = "CONTRADICTED"
            elif "UNVERIFIED" in status:
                finding['evidenceStatus'] = "UNVERIFIED"
            else:
                finding['evidenceStatus'] = "SUPPORTED"
        elif field == "Workflow Status":
            if "CLOSED" in value:
                finding['workflowStatus'] = "CLOSED"
            elif "IN_REVIEW" in value or "REVIEW" in value:
                finding['workflowStatus'] = "IN_REVIEW"
            else:
                finding['workflowStatus'] = "OPEN"
        elif field == "Summary":
            finding['summary'] = value.replace("**", "")
        elif field == "Evidence Refs":
            finding['evidenceRefs'] = value
        elif field == "Legal Significance":
            finding['legalSignificance'] = value.replace("**", "")
        elif field == "Related" or field == "Cross-refs":
            # Parse related findings
            related = re.findall(r'F[-\d\w]+', value)
            if related:
                finding['relatedFindings'] = related
        elif field == "Source":
            finding['source'] = value
        elif field == "Staff":
            finding['staff'] = value
        elif field == "Quote" or field == "Key Quote":
            finding['keyQuote'] = value

    # Set category
    finding['category'] = default_category

    # Set defaults
    if 'date' not in finding:
        finding['date'] = finding.get('dateFound', 'Unknown')
    if 'dateFound' not in finding:
        finding['dateFound'] = 'Pre-existing'
    if 'evidenceStatus' not in finding:
        finding['evidenceStatus'] = 'SUPPORTED'
    if 'workflowStatus' not in finding:
        finding['workflowStatus'] = 'OPEN'
    if 'source' not in finding:
        finding['source'] = 'FINDINGS_REGISTRY'
    if 'relatedFindings' not in finding:
        finding['relatedFindings'] = []

    # Determine if critical based on markers
    finding['critical'] = '⭐' in text or 'CRITICAL' in text.upper()

    return finding

def parse_registry_file(filepath, category):
    """Parse all findings from a registry markdown file."""
    findings = []

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by finding headers
    sections = re.split(r'\n(?=## F[-\d\w]+)', content)

    for section in sections:
        if not section.strip() or not section.strip().startswith('## F'):
            continue

        finding = parse_finding_from_markdown(section, category)
        if finding and finding.get('id'):
            findings.append(finding)

    return findings

def main():
    # Load existing findings
    with open(FINDINGS_JSON, 'r', encoding='utf-8') as f:
        data = json.load(f)

    existing_ids = {f['id'] for f in data['findings']}
    print(f"Existing findings: {len(existing_ids)}")

    # Parse all registry files
    new_findings = []
    all_registry_findings = []

    for filename, category in CATEGORY_MAP.items():
        filepath = REGISTRY_DIR / filename
        if filepath.exists():
            findings = parse_registry_file(filepath, category)
            all_registry_findings.extend(findings)
            print(f"  {filename}: {len(findings)} findings")

    # Find new findings not in existing
    for finding in all_registry_findings:
        if finding['id'] not in existing_ids:
            new_findings.append(finding)
            print(f"    NEW: {finding['id']} - {finding.get('title', 'Untitled')[:50]}")

    print(f"\nNew findings to add: {len(new_findings)}")

    # Add new findings to data
    data['findings'].extend(new_findings)

    # Sort findings by ID
    def sort_key(f):
        fid = f['id']
        # Handle F-GEM-XXX format
        if fid.startswith('F-GEM-'):
            return (1, int(fid.replace('F-GEM-', '').replace('/', '').split()[0]))
        # Handle F-GPT-XXX format
        elif fid.startswith('F-GPT-'):
            return (2, int(fid.replace('F-GPT-', '')))
        # Handle FXXX format
        else:
            num = fid.replace('F', '').replace('a', '.1').replace('b', '.2').replace('A', '.1')
            try:
                return (0, float(num))
            except:
                return (0, 9999)

    data['findings'].sort(key=sort_key)

    # Update metadata
    data['metadata']['totalFindings'] = len(data['findings'])
    data['metadata']['lastUpdated'] = "2026-01-22"

    # Find highest ID
    numeric_ids = []
    for f in data['findings']:
        fid = f['id']
        if fid.startswith('F') and not fid.startswith('F-'):
            num = fid.replace('F', '').replace('a', '').replace('b', '').replace('A', '')
            try:
                numeric_ids.append(int(num))
            except:
                pass
    if numeric_ids:
        data['metadata']['highestFindingId'] = f"F{max(numeric_ids)}"

    # Write updated findings
    with open(FINDINGS_JSON, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"\nUpdated {FINDINGS_JSON}")
    print(f"Total findings: {len(data['findings'])}")

if __name__ == "__main__":
    main()
