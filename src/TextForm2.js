import React, { useState } from 'react';

export default function TextForm2(props) {
    const [text, setText] = useState('');

    function onChangeHandler(event) {
        setText(event.target.value);
    }
    function LowerCaseClick(event) {
        console.log('Lower case is clicked');
        // setText(text.toLowerCase());
        setText(text.toLowerCase());
        props.setAlert('Converted to Lower Case');

    }
    function UpperCaseClick(event) {
        console.log('Lower case is clicked');
        // setText(text.toLowerCase());
        setText(text.toUpperCase());
        props.setAlert('Converted to Upper Case');
    }
    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
    function TitleCaseClick() {
        let str = toTitleCase(text);
        setText(str);
        props.setAlert('Converted to Title Case');

    }
    function AlternatingCaseClick() {
        let str = alternateCase(text);
        setText(str);
        props.setAlert('Converted to Alternating Case');

    }
    function SentenceCaseClick() {
        let str = toProperCase(text);
        setText(str);
        props.setAlert('Converted to Sentence Case');

    }
    function InverseCaseClick() {
        let str = toInverseCase(text);
        setText(str);
        props.setAlert('Converted to Inverse Case');

    }
    function WordCount(str) {
        return str.split(' ')
            .filter(function (n) { return n !== '' })
            .length;
    }
    function toProperCase(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }

    var alternateCase = function (s) {
        var chars = s.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
        }
        return chars.join("");
    };
    function toInverseCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toLowerCase() + txt.substr(1).toUpperCase();
            }
        );
    }
    function CopyToClipBoardClick() {
        navigator.clipboard.writeText(text).then(function () {
            // console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            // console.error('Async: Could not copy text: ', err);
        });
        props.setAlert('Text copied to clipboard');

    }
    function save() {
        <form method="get" action="file.txt">
        {/* <button type="submit">Download!</button> */}
     </form>
    }
    function ClearText(){
        setText('');
        props.setAlert('Text is cleared');

    }
    function RemoveExtraSpaces(){
        setText(text.split(' ').filter(word => word).join(' '));
        props.setAlert('Extra Spaces are removed');

    }
    // Declare a new state variable, which we'll call "count"
    return (
        <div className="container">
            <div class="mb-3">
                <h1>{props.heading}</h1>

            </div>
            <div className = 'text-center'>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" ></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Enter Your text here:" value={text} onChange={onChangeHandler} style = {{backgroundColor:props.mode === 'light'?'white':'gray', color : props.mode === 'light'?'black':'white'}}></textarea>

            </div>
            <button type="button" className="btn btn-success mx-1 my-1" onClick={LowerCaseClick}>Lower Case</button>
            <button type="button" className="btn btn-success mx-1 my-1" onClick={UpperCaseClick}>Upper Case</button>
            <button type="button" className="btn btn-success mx-1 my-1" onClick={TitleCaseClick}>Title Case</button>
            <button type="button" className="btn btn-success mx-1 my-1" onClick={SentenceCaseClick}>Sentence Case</button>
            <button type="button" className="btn btn-success mx-1 my-1" onClick={AlternatingCaseClick}>AlTeRnAtInG CaSe</button>
            <button type="button" className="btn btn-success mx-1 my-1" onClick={InverseCaseClick}>iNVERSE CaSe</button>

            


            <button type="button" className="btn btn-success mx-1 my-1" onClick={CopyToClipBoardClick}>Copy to Clipborad</button>
            <button type="button" className="btn btn-success mx-1 my-1" onClick={ClearText}>Clear</button>

<button type="button" className="btn btn-success my-1 " onClick  = {RemoveExtraSpaces}>Remove Extra Spaces</button>

</div>
            <div mb-3>
                <h1>Text Summery</h1>
                <p>
                    You write {WordCount(text)} words and {text.length} characters
                </p>
                <p>You can read it in {0.008 * text.split("").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something above to preview it here"}</p>
            </div>
        </div>
    )
}
