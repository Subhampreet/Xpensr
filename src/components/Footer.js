import React from 'react'
import "./Footer.css";


function Footer({children}) {
  return (
    <div style={phantom} >
        <div style={style}>
          { children }
        </div>
    </div>    
  )
}

export default Footer