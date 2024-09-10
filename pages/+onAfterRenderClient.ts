import {navigate} from "vike/client/router"

console.log('+onAfterRenderClient.ts')

export default () => {
  autoRedirect()
}

async function autoRedirect() {
  console.log('autoRedirect()')
  const {pathname} = window.location
  const slideNumber = parseInt(pathname.slice(1), 10)
  if (isNaN(slideNumber)) {
    navigate(`/1`)
  }
}
