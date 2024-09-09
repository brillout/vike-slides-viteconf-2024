export {Page};

import vikeIcon from '../../assets/vike-vertical.svg'

function Page() {
  return <>
    <Banner />
    <Hr />
    <TagLine2 />
  </>
}

function TagLine2() {
  return <>
    <p>Like Next.js / Nuxt but:</p>
    <ul>
      <li>
        Flexible
      </li>
      <li>
        Ejectable extensions
      </li>
    </ul>
  </>
}

function Banner() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: 0,
      fontSize: 16 // reset
    }}>
      <div
        style={{
          display: 'flex',
          height: 320,
          scale: '0.8'
        }}
      >
        <img src={vikeIcon} style={{marginRight: 50, marginTop: 0, height: '100%'}} />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%'}}>
          <div>
            <span
              style={{
                fontSize: '8.8em',
                display: 'inline-block',
                verticalAlign: 'middle',
                fontWeight: 500,
                lineHeight: '1.1em'
              }}
            >
              Vike
            </span>
          </div>
          <div style={{fontSize: '4.2em', paddingLeft: 4, paddingTop: 0, paddingBottom: 0, lineHeight: '1.2em'}}>
            Next Generation
            <br />
            Frontend Framework
          </div>
        </div>
      </div>
    </div>
  )
}

function Hr() {
  return <>
    <hr style={{
      opacity: 0.3,
      /*
    width: 600
    */
    }} />
  </>
}
