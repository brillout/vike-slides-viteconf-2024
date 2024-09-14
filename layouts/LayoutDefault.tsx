export {Layout}

import {usePageContext} from "vike-react/usePageContext";
import "./css/index.css";
import "./LayoutDefault.css";
import React from "react";
import {getSlideNumber} from "../utils/getSlideNumber";

const footerContent: {name: string, numberOfSlides: number}[] = [
  {
    name: 'What is Vike?',
    numberOfSlides: 5,
  },
  {
    name: 'V1 Release',
    numberOfSlides: 1,
  },
  {
    name: 'Future',
    numberOfSlides: 4,
  },
  {
    name: 'Outro',
    numberOfSlides: 1,
  },
]

function Layout({children}: {children: React.ReactNode}) {
  const pageContext = usePageContext()
  /* Implement +style setting?
  const {style} = pageContext.config
  */
  const style = {}
  return (
    <div id="slide-wrapper">
      <div id="slide-content" style={style}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

function Footer() {
  const pageContext = usePageContext()
  const {pathname} = pageContext.urlParsed
  const slideNumber = getSlideNumber(pathname)
  let slideNumberFooter = 0
  return (
    <div id='footer'>
      {
        footerContent.map(({name, numberOfSlides}) => (
          <div>
            <div>
              {name}
            </div>
            <div> {
              Array(numberOfSlides).fill(undefined).map(() => {
                slideNumberFooter++
                const isCurrentSlide = slideNumberFooter === slideNumber
                return !isCurrentSlide ? '○' : '●'
              })
            }
            </div>
          </div>
        ))
      }
    </div>
  )
}
