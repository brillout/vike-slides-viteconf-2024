import { jsx } from "react/jsx-runtime";
import { usePageContext } from "vike-react/usePageContext";
/* empty css               */
/* empty css               */
function Layout({ children }) {
  usePageContext();
  const style = {};
  return /* @__PURE__ */ jsx("div", { id: "slide-wrapper", children: /* @__PURE__ */ jsx("div", { id: "slide-content", style, children }) });
}
export {
  Layout as L
};
