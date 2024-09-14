import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as Layout } from "../chunks/chunk-BFzbRJE1.js";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "vike-react/usePageContext";
/* empty css                       */
/* empty css                       */
const vikeIcon = "/assets/static/vike-laying.BLoC240y.svg";
function Contributor({ name, user, id }) {
  return /* @__PURE__ */ jsxs("div", { style: { marginTop: 10, fontSize: "0.8em" }, children: [
    /* @__PURE__ */ jsx("img", { src: `https://avatars.githubusercontent.com/u/${id}?v=4&size=200`, style: { height: 50, borderRadius: 7, verticalAlign: "middle" } }),
    /* @__PURE__ */ jsx("span", { style: { verticalAlign: "middle", fontWeight: 500, paddingLeft: 20 }, children: name }),
    /* @__PURE__ */ jsx("span", { style: { verticalAlign: "middle", padding: 5 }, children: " · " }),
    /* @__PURE__ */ jsx("span", { style: { verticalAlign: "middle", color: "#888" }, children: user })
  ] });
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    ...props.components
  };
  return jsxs(Fragment, {
    children: ["\n", jsx(_components.h1, {
      children: "Vike"
    }), "\n", jsx("div", {
      style: {
        color: "#666",
        marginTop: 0,
        marginBottom: 50
      },
      children: jsx(_components.p, {
        children: jsx(_components.a, {
          href: "https://vike.dev",
          children: "vike.dev"
        })
      })
    }), "\n", jsxs("div", {
      style: {
        position: "relative"
      },
      children: [jsx(Contributor, {
        name: "Rom",
        user: "brillout",
        id: 1005638
      }), jsx(Contributor, {
        name: "Joël",
        user: "magne400",
        id: 1098371
      }), jsx(Contributor, {
        name: "Dani",
        user: "nitedani",
        id: 67418286
      }), jsx(Contributor, {
        name: "Muhammad",
        user: "phonzammi",
        id: 39896528
      }), jsxs("div", {
        style: {
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          display: "flex",
          alignItems: "center",
          marginLeft: -320,
          flexDirection: "column",
          justifyContent: "center"
        },
        children: [jsx("img", {
          src: vikeIcon,
          style: {
            height: 100
          }
        }), jsx("div", {
          style: {
            fontSize: "0.7em",
            color: "#555"
          },
          children: jsxs(_components.p, {
            children: ["with ", jsx("span", {
              style: {
                fontFamily: "emoji"
              },
              children: "❤️"
            })]
          })
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent
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
    definedAtData: { "filePathToShowToUser": "/pages/10/+Page.mdx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import4
    }
  }
};
export {
  configValuesSerialized
};
