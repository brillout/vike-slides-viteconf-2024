export function getSlideNumber(pathname: string) {
  const slideNumber = parseInt(pathname.slice(1), 10)
  return slideNumber
}
