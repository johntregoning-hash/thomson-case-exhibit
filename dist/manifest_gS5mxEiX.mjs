import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_BG5xGXoY.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/johntregoning/Documents/thomson-case-exhibit/","adapterName":"","routes":[{"file":"file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/actors/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/actors","isIndex":false,"type":"page","pattern":"^\\/actors\\/?$","segments":[[{"content":"actors","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/actors.astro","pathname":"/actors","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/documents/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/documents","isIndex":false,"type":"page","pattern":"^\\/documents\\/?$","segments":[[{"content":"documents","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/documents.astro","pathname":"/documents","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/essays/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/essays","isIndex":false,"type":"page","pattern":"^\\/essays\\/?$","segments":[[{"content":"essays","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/essays.astro","pathname":"/essays","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/evidence/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/evidence","isIndex":false,"type":"page","pattern":"^\\/evidence\\/?$","segments":[[{"content":"evidence","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/evidence.astro","pathname":"/evidence","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/findings/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/findings","isIndex":false,"type":"page","pattern":"^\\/findings\\/?$","segments":[[{"content":"findings","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/findings.astro","pathname":"/findings","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/timeline/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/timeline","isIndex":false,"type":"page","pattern":"^\\/timeline\\/?$","segments":[[{"content":"timeline","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/timeline.astro","pathname":"/timeline","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/vindication/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/vindication","isIndex":false,"type":"page","pattern":"^\\/vindication\\/?$","segments":[[{"content":"vindication","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/vindication.astro","pathname":"/vindication","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://johntregoning-hash.github.io","base":"/thomson-case-exhibit","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/johntregoning/Documents/thomson-case-exhibit/src/components/actors/ActorCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/actors.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/actors@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/components/findings/FindingCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/findings.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/findings@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/essays.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/essays@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/essays/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/essays/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/components/navigation/Nav.astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/layouts/BaseLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/documents.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/documents@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/evidence.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/evidence@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/findings/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/findings/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/timeline.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/timeline@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/johntregoning/Documents/thomson-case-exhibit/src/pages/vindication.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/vindication@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/actors@_@astro":"pages/actors.astro.mjs","\u0000@astro-page:src/pages/documents@_@astro":"pages/documents.astro.mjs","\u0000@astro-page:src/pages/essays@_@astro":"pages/essays.astro.mjs","\u0000@astro-page:src/pages/essays/[...slug]@_@astro":"pages/essays/_---slug_.astro.mjs","\u0000@astro-page:src/pages/evidence@_@astro":"pages/evidence.astro.mjs","\u0000@astro-page:src/pages/findings/[id]@_@astro":"pages/findings/_id_.astro.mjs","\u0000@astro-page:src/pages/findings@_@astro":"pages/findings.astro.mjs","\u0000@astro-page:src/pages/timeline@_@astro":"pages/timeline.astro.mjs","\u0000@astro-page:src/pages/vindication@_@astro":"pages/vindication.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_gS5mxEiX.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/diagnostic-delay.mdx?astroContentCollectionEntry=true":"chunks/diagnostic-delay_pSFBZWUl.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/medication-causation.mdx?astroContentCollectionEntry=true":"chunks/medication-causation_a0MhhA5k.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/practice-manager-conduct.mdx?astroContentCollectionEntry=true":"chunks/practice-manager-conduct_BbpOQwpH.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/somatoform-contamination.mdx?astroContentCollectionEntry=true":"chunks/somatoform-contamination_BxcUsgoQ.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/tos-delay.mdx?astroContentCollectionEntry=true":"chunks/tos-delay_Dsdp_m0c.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/vindication-evidence.mdx?astroContentCollectionEntry=true":"chunks/vindication-evidence_DqoPePsX.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/diagnostic-delay.mdx?astroPropagatedAssets":"chunks/diagnostic-delay_CUG_a0FK.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/medication-causation.mdx?astroPropagatedAssets":"chunks/medication-causation_DRzEYXQr.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/practice-manager-conduct.mdx?astroPropagatedAssets":"chunks/practice-manager-conduct_BD8JrjDy.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/somatoform-contamination.mdx?astroPropagatedAssets":"chunks/somatoform-contamination_CzyjLLYs.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/tos-delay.mdx?astroPropagatedAssets":"chunks/tos-delay_57K9WpRp.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/vindication-evidence.mdx?astroPropagatedAssets":"chunks/vindication-evidence_C6ar3BAB.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/diagnostic-delay.mdx":"chunks/diagnostic-delay_vWZUI9lG.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/medication-causation.mdx":"chunks/medication-causation_B4RmK0gw.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/practice-manager-conduct.mdx":"chunks/practice-manager-conduct_G6pDdDBT.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/somatoform-contamination.mdx":"chunks/somatoform-contamination_BtgoPBKz.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/tos-delay.mdx":"chunks/tos-delay_D-0vr1yM.mjs","/Users/johntregoning/Documents/thomson-case-exhibit/src/content/essays/vindication-evidence.mdx":"chunks/vindication-evidence_DmLo4ePJ.mjs","@components/actors/ActorNetwork":"_astro/ActorNetwork.CXoRuprE.js","@components/essays/ReadingProgress":"_astro/ReadingProgress.Bs9myLem.js","@components/timeline/ScrollObserver":"_astro/ScrollObserver.NHAiy1Gj.js","@components/vindication/AnimatedCounter":"_astro/AnimatedCounter.DuITJcgE.js","/astro/hoisted.js?q=3":"_astro/hoisted.5NGk-1Mc.js","/astro/hoisted.js?q=5":"_astro/hoisted.BghRJJeY.js","/astro/hoisted.js?q=0":"_astro/hoisted.BGswKAoU.js","/astro/hoisted.js?q=1":"_astro/hoisted.CjvCNuBa.js","/astro/hoisted.js?q=2":"_astro/hoisted.DjStQOlC.js","/astro/hoisted.js?q=4":"_astro/hoisted.GV0OjNrm.js","@astrojs/react/client.js":"_astro/client.CNQpmoY6.js","@components/ui/CommandPalette":"_astro/CommandPalette.D7kvG_NB.js","/astro/hoisted.js?q=6":"_astro/hoisted.Bg6DJql9.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/thomson-case-exhibit/file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/actors/index.html","/thomson-case-exhibit/file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/documents/index.html","/thomson-case-exhibit/file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/essays/index.html","/thomson-case-exhibit/file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/evidence/index.html","/thomson-case-exhibit/file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/findings/index.html","/thomson-case-exhibit/file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/timeline/index.html","/thomson-case-exhibit/file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/vindication/index.html","/thomson-case-exhibit/file:///Users/johntregoning/Documents/thomson-case-exhibit/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"7a8iDcJw53oD2UQRVk+38uRF6ofU8L7V5G9QPB+5Wzs=","experimentalEnvGetSecretEnabled":false});

export { manifest };
