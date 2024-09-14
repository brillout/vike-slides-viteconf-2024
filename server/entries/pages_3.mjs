import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as Layout } from "../chunks/chunk-BFzbRJE1.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import "vike-react/usePageContext";
/* empty css                       */
/* empty css                       */
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h1, {
      children: "Extensions"
    }), "\n", jsx(_components.p, {
      children: "For example, UI framework (React/Vue/Solid/...) integration:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "vike-react <=> Next.js/Remix"
      }), "\n", jsx(_components.li, {
        children: "vike-vue <=> Nuxt"
      }), "\n", jsx(_components.li, {
        children: "vike-solid <=> Solid Start"
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["Ejectable: you can, if you want, eject ", "vike-{react,vue,solid}", " for", jsx(_components.br, {}), "\n", "full control over the React/Vue/Solid integration."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Quickly get started with ", jsx(_components.code, {
          children: "vike-{react,vue,solid}"
        })]
      }), "\n", jsx(_components.li, {
        children: "Later, for extra flexibility, you can eject"
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
    definedAtData: { "filePathToShowToUser": "/pages/3/+Page.mdx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import4
    }
  }
};
export {
  configValuesSerialized
};
