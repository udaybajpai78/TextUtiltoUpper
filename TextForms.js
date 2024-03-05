import React, {useState} from 'react'



export default function TextForms(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was Clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        console.log("One Change");
        setText(event.target.value);
    }

    /*react hooks */
    const [text, setText]= useState('Enter Text Here');
    
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
    </div>
    </>

  )
}
