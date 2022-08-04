import React from 'react'
import pic from './web_logo.png'
// import React, { useState } from 'react';

export default function Myheader(props) {
  // const [mode, setMode] = useState(props.mode);
  return (
    <div>
      <nav class={`navbar bg-${props.mode}`}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={pic} alt="" width="30" height="24" class="d-inline-block align-text-top" />
            {props.title}
          </a>
          <div class="form-check form-switch text-light">
            <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} for="flexSwitchCheckDefault"  >Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}

Myheader.defaultProps = {
  title: "Set title here"
}