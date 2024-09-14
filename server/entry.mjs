import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/1",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/1", "definedBy": "/pages/1/" },
    loadConfigValuesAll: () => import("./entries/pages_1.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/10",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/10", "definedBy": "/pages/10/" },
    loadConfigValuesAll: () => import("./entries/pages_10.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/2",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/2", "definedBy": "/pages/2/" },
    loadConfigValuesAll: () => import("./entries/pages_2.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/3",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/3", "definedBy": "/pages/3/" },
    loadConfigValuesAll: () => import("./entries/pages_3.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/4",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/4", "definedBy": "/pages/4/" },
    loadConfigValuesAll: () => import("./entries/pages_4.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/5",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/5", "definedBy": "/pages/5/" },
    loadConfigValuesAll: () => import("./entries/pages_5.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/6",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/6", "definedBy": "/pages/6/" },
    loadConfigValuesAll: () => import("./entries/pages_6.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/7",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/7", "definedBy": "/pages/7/" },
    loadConfigValuesAll: () => import("./entries/pages_7.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/8",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/8", "definedBy": "/pages/8/" },
    loadConfigValuesAll: () => import("./entries/pages_8.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/9",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/9", "definedBy": "/pages/9/" },
    loadConfigValuesAll: () => import("./entries/pages_9.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["clientEntryLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{00f}~.js": {
    "file": "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css",
    "src": "_chunk-!~{00f}~.js"
  },
  "_chunk-!~{00g}~.js": {
    "file": "assets/static/layouts_css_index-745bd045.CFferdXx.css",
    "src": "_chunk-!~{00g}~.js"
  },
  "_chunk-!~{00h}~.js": {
    "file": "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
    "src": "_chunk-!~{00h}~.js"
  },
  "_chunk-BU_EuJVx.js": {
    "file": "assets/chunks/chunk-BU_EuJVx.js",
    "name": "Hr",
    "imports": [
      "_chunk-DLmVkBjv.js"
    ]
  },
  "_chunk-DLmVkBjv.js": {
    "file": "assets/chunks/chunk-DLmVkBjv.js",
    "name": "_onPageTransitionStart",
    "imports": [
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "_chunk-QtDcjt-F.js": {
    "file": "assets/chunks/chunk-QtDcjt-F.js",
    "name": "renderPageClientSide"
  },
  "_chunk-xynrxboT.js": {
    "file": "assets/chunks/chunk-xynrxboT.js",
    "name": "navigate",
    "imports": [
      "_chunk-QtDcjt-F.js"
    ]
  },
  "assets/vike-laying.svg": {
    "file": "assets/static/vike-laying.BLoC240y.svg",
    "src": "assets/vike-laying.svg"
  },
  "assets/vike-vertical.svg": {
    "file": "assets/static/vike-vertical.C2LwQHMV.svg",
    "src": "assets/vike-vertical.svg"
  },
  "layouts/css/Inter-Var.ttf": {
    "file": "assets/static/Inter-Var.dulBMp8D.ttf",
    "src": "layouts/css/Inter-Var.ttf"
  },
  "node_modules/.pnpm/vike@0.4.195_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.3_@types+node@15.14.9_/node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.5cYe1agk.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/.pnpm/vike@0.4.195_react-streaming@0.3.43_react-dom@18.3.1_react@18.3.1__react@18.3.1__vite@5.4.3_@types+node@15.14.9_/node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-QtDcjt-F.js"
    ],
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/1",
      "virtual:vike:pageConfigValuesAll:client:/pages/10",
      "virtual:vike:pageConfigValuesAll:client:/pages/2",
      "virtual:vike:pageConfigValuesAll:client:/pages/3",
      "virtual:vike:pageConfigValuesAll:client:/pages/4",
      "virtual:vike:pageConfigValuesAll:client:/pages/5",
      "virtual:vike:pageConfigValuesAll:client:/pages/6",
      "virtual:vike:pageConfigValuesAll:client:/pages/7",
      "virtual:vike:pageConfigValuesAll:client:/pages/8",
      "virtual:vike:pageConfigValuesAll:client:/pages/9",
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/index"
    ]
  },
  "pages/+client.ts": {
    "file": "assets/entries/pages_client.N1duT2mJ.js",
    "name": "entries/pages/_client",
    "src": "pages/+client.ts",
    "isEntry": true,
    "imports": [
      "_chunk-xynrxboT.js",
      "_chunk-QtDcjt-F.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/1": {
    "file": "assets/entries/pages_1.BEL04-nr.js",
    "name": "entries/pages/1",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/1",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-BU_EuJVx.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/vike-vertical.C2LwQHMV.svg",
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/10": {
    "file": "assets/entries/pages_10.CLaRfB6z.js",
    "name": "entries/pages/10",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/10",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/vike-laying.BLoC240y.svg",
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/2": {
    "file": "assets/entries/pages_2.BnuYzQ5p.js",
    "name": "entries/pages/2",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/2",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-BU_EuJVx.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/3": {
    "file": "assets/entries/pages_3.WIM9vHch.js",
    "name": "entries/pages/3",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/3",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/4": {
    "file": "assets/entries/pages_4.PIPmRWpW.js",
    "name": "entries/pages/4",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/4",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/5": {
    "file": "assets/entries/pages_5.CPMzVioa.js",
    "name": "entries/pages/5",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/5",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/6": {
    "file": "assets/entries/pages_6.O1tyKOUa.js",
    "name": "entries/pages/6",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/6",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/7": {
    "file": "assets/entries/pages_7.DZhXsECy.js",
    "name": "entries/pages/7",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/7",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/8": {
    "file": "assets/entries/pages_8.B-xC9rMi.js",
    "name": "entries/pages/8",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/8",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/9": {
    "file": "assets/entries/pages_9.BhP8BXk6.js",
    "name": "entries/pages/9",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/9",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.C-elQatK.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.DVJ4isXK.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-DLmVkBjv.js",
      "_chunk-QtDcjt-F.js",
      "_chunk-xynrxboT.js"
    ],
    "css": [
      "assets/static/vike-react-da2f7bba.B6DZbHFi.css",
      "assets/static/layouts_css_index-745bd045.CFferdXx.css",
      "assets/static/layouts_LayoutDefault-fc0c0614.BNmgxSBa.css"
    ],
    "assets": [
      "assets/static/Inter-Var.dulBMp8D.ttf"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.195",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
