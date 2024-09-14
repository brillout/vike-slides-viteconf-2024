import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as Layout } from "../chunks/chunk-BFzbRJE1.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import "vike-react/usePageContext";
/* empty css                       */
/* empty css                       */
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    li: "li",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h1, {
      children: "V1 Release"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "0.4.x"
        }), " already stable, but missing essentials"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "1.0.0"
        }), " includes all essentials:", "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "✅ Nested layouts"
          }), "\n", jsxs(_components.li, {
            children: ["✅ ", jsx(_components.code, {
              children: "vike-{react,vue,solid}"
            }), " head management"]
          }), "\n", jsx(_components.li, {
            children: "✅ Vite transpilation of server (Express.js/Hono/...)"
          }), "\n", jsx(_components.li, {
            children: "🚧 Lots of polishing"
          }), "\n"]
        }), "\n"]
      }), "\n", jsx(_components.li, {
        children: "ETA: fall 2024"
      }), "\n"]
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
    definedAtData: { "filePathToShowToUser": "/pages/5/+Page.mdx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import4
    }
  }
};
export {
  configValuesSerialized
};
