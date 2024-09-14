import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as Layout } from "../chunks/chunk-BFzbRJE1.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { usePageContext } from "vike-react/usePageContext";
/* empty css                       */
/* empty css                       */
function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "404 Page Not Found" }),
      /* @__PURE__ */ jsx("p", { children: "This page could not be found." })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "500 Internal Server Error" }),
    /* @__PURE__ */ jsx("p", { children: "Something went wrong." })
  ] });
}
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["clientEntryLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true
    }
  },
  ["Loading"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/components/Loading", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: import1
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: onRenderHtml
    }
  },
  ["passToClient"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
    valueSerialized: [{
      type: "js-serialized",
      value: ["_configFromHook"]
    }]
  },
  ["Layout"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/layouts/LayoutDefault.tsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "pointer-import",
      value: Layout
    }]
  },
  ["client"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+client.ts", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "js-serialized",
      value: "/pages/+client.ts"
    }
  },
  ["title"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "title"] },
    valueSerialized: {
      type: "js-serialized",
      value: "Vike Talk"
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/_error/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import4
    }
  }
};
export {
  configValuesSerialized
};
