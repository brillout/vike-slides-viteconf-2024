export {Layout}

import {usePageContext} from "vike-react/usePageContext";
import "./css/index.css";
import "./LayoutDefault.css";
import React from "react";

function Layout({children}: {children: React.ReactNode}) {
  const pageContext = usePageContext()
  const {style} = pageContext.config
  return (
    <div id="slide-wrapper">
      <div id="slide-content" style={style}>
        {children}
      </div>
    </div>
  )
}
