import {navigate} from "vike/client/router"

console.log('+client.ts')

window.onkeydown = ({code, shiftKey}) => {
  console.log('onkeydown')
  const {pathname} = window.location

  const slideNumber = parseInt(pathname.slice(1), 10)
  let slideNumberNext = slideNumber

  if (['ArrowLeft'].includes(code)) {
    if (shiftKey) {
      slideNumberNext++
    } else {
      slideNumberNext--
    }
  }
  else if (['ArrowRight', 'Space'].includes(code)) {
    if (shiftKey) {
      slideNumberNext--
    } else {
      slideNumberNext++
    }
  } else {
    return
  }

  if (slideNumberNext !== slideNumber && slideNumberNext !== 0) {
    navigate(`/${slideNumberNext}`)
  }
}
