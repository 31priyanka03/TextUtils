import React, { useState } from "react";


export default function TextForm(props) {
   const handleUp = ()=> {
    // console.log("Upperase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","Success");
   }
   const lowerUp = ()=> {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","Success");
   }
   const onclear = ()=> {
    let newText = '';
    setText(newText)
    props.showAlert("Cleared","Success");
   }
   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

    const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
  }
    const[text, setText] = useState('');
    
  return (
    <>
   <div id="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(100,94,228)':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>  
    <button className = "btn btn-primary mx-1" onClick={handleUp}>Convert to UpperCase</button>
    <button className = "btn btn-primary mx-1" onClick={lowerUp}>Convert to LowerCase</button>
    <button className = "btn btn-primary mx-1" onClick={onclear}>Clear</button>
    <button  className= "btn btn-primary mx-1" type="submit" onClick={speak}>Speak</button>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p> 
    </div>
    </div>
</>
  )
}

  
