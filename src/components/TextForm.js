import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text);
    // setText("You have clicked on handleUpCLick");
    let newText = text.toUpperCase();
    setText(newText);
    localStorage.setItem(1,text);
    props.showAlert(" Converted to UpperCase","success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    localStorage.setItem(1,text);
    props.showAlert(" Converted to LowerCase","success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    localStorage.setItem(1,text);
    props.showAlert(" Text Cleared","success");
  }

  // const handleCapitalizeWordClick = () => {
  //   let lowercase = text.toLowerCase();
  //   let words = lowercase.split(" ");
  //   let newWords = words.map((word) => {
  //     return word.charAt(0).toUpperCase() + word.slice(1);
  //   });
  //   let newText = newWords.join(" ");
  //   setText(newText);
  //   localStorage.setItem(1,text);
  // };

  const handleCapitalizeWordClick = () =>{
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const upper = text.split('\n').map(line => line.split(' ').map(capitalize).join(' ')).join('\n');
    setText(upper);
    localStorage.setItem(1,text);
    props.showAlert(" Converted to Capitalized Case","success");
  };

  function textToSpeech(){
    const Speech= new SpeechSynthesisUtterance();
    const message= document.getElementById("myBox").value;
    Speech.lang='eng';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
}

  function undo(){
    let itm=localStorage.getItem(1)
    setText(itm) 

}

  const reversed = () => {
    let splitWord = text.split("");
    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords
    setText(newText);
    localStorage.setItem(1,text);
    props.showAlert(" Text has been Reversed","success");
  };

  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    localStorage.setItem(1,text);
    props.showAlert(" Extra spaces has been removed","success");
  }

  const handleLightTheme = () => {
    document.querySelector('.form-control2').style.backgroundColor = "white"
    document.querySelector('.form-control2').style.color = "black"
  }

  const handleDarkTheme = () => {
    document.querySelector('.form-control2').style.backgroundColor = "black"
    document.querySelector('.form-control2').style.color = "white"
  }

  const handleCopy = () =>{
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert(" Copied to Clipboard","success");
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
//   text = "new text"  Wrong way
//   setText("new text")   Correct way
  return (  
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example Text Area</label> */}
        <textarea className="form-control2" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#00457d':'white', color: props.mode==='dark'?'white':'#042743', width:'100%'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpClick} style={{borderColor:'white'}}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleLoClick} style={{borderColor:'white'}}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleClearClick} style={{borderColor:'white'}}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={undo} style={{borderColor:'white'}}>Undo</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleCapitalizeWordClick} style={{borderColor:'white'}}>Captilize Words</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={textToSpeech} style={{borderColor:'white'}}>Read Out</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={reversed} style={{borderColor:'white'}}>Reverse Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleCopy} style={{borderColor:'white'}}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces} style={{borderColor:'white'}}>Remove extra Space</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleLightTheme} style={{borderColor:'white'}}>Light Theme TextArea</button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleDarkTheme} style={{borderColor:'white'}}>Dark Theme TextArea</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}
