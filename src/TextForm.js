import React, { useState } from 'react';
export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');// Declare a new state variable, which we'll call "count"
 
  function lowerCaseClicked(event){
      let newText = text.toLowerCase();
      setText(newText);
  }
  function uperCaseClicked(event){
    console.log(text)
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Uper case is clicked");
}

function handleOnChange(event){
    //   setText("Write Here");
    setText(event.target.value);
    
    console.log("handle on change");
}

    return (
        <div className = "container">
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">{props.analyzeHeading}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" value = {text} onChange = {handleOnChange}></textarea>
            </div>
            <button class="btn btn-primary" onClick = {uperCaseClicked}>Convert to upper case</button>
            <button class="btn btn-secondary m-3" onClick = {lowerCaseClicked}>Convert to lower case</button>
        </div>
        
    )
}
TextForm.defaultProps = {
    analyzeHeading: "Set the Analyze heading",
    heading:"Set the h1 heading"
}
