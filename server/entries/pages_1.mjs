import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as Layout } from "../chunks/chunk-BFzbRJE1.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as Hr } from "../chunks/chunk-CHuyBqyi.js";
import "vike-react/usePageContext";
/* empty css                       */
/* empty css                       */
const vikeIcon = "/assets/static/vike-vertical.C2LwQHMV.svg";
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Banner, {}),
    /* @__PURE__ */ jsx(Hr, {}),
    /* @__PURE__ */ jsx(TagLine2, {})
  ] });
}
function TagLine2() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { children: "Like Next.js / Nuxt but:" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "Flexible" }),
      /* @__PURE__ */ jsx("li", { children: "Ejectable extensions" })
    ] })
  ] });
}
function Banner() {
  return /* @__PURE__ */ jsx("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    scale: "0.8",
    marginLeft: -80,
    marginRight: -80,
    fontSize: 16
    // reset
  }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        display: "flex",
        height: 320
      },
      children: [
        /* @__PURE__ */ jsx("img", { src: vikeIcon, style: { marginRight: 50, marginTop: 0, height: "100%" } }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "100%" }, children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                fontSize: "8.8em",
                display: "inline-block",
                verticalAlign: "middle",
                fontWeight: 500,
                lineHeight: "1.1em"
              },
              children: "Vike"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { style: { fontSize: "4.2em", paddingLeft: 4, paddingTop: 0, paddingBottom: 0, lineHeight: "1.2em" }, children: [
            "Next Generation",
            /* @__PURE__ */ jsx("br", {}),
            "Frontend Framework"
          ] })
        ] })
      ]
    }
  ) });
}
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
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
    definedAtData: { "filePathToShowToUser": "/pages/1/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import4
    }
  }
};
export {
  configValuesSerialized
};
