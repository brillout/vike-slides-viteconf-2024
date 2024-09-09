import React from "react";
import {usePageContext} from "vike-react/usePageContext";

export default function Page() {
  const pageContext = usePageContext()
  const {routeParams} = pageContext
  const n = parseInt(routeParams['*'].slice(1), 10)
  return (
    <>
      <h1>My Vike app</h1>
      {n} This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
        </li>
      </ul>
    </>
  );
}
