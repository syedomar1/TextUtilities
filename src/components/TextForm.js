import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text);
    // setText("You have clicked on handleUpCLick");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked"+text);
    // setText("You have clicked on handleUpCLick");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
//   text = "new text"  Wrong way
//   setText("new text")   Correct way
  return (  
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example Text Area</label> */}
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className='container my-3'>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
