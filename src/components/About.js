import React, { useState } from "react";

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor: 'white',
    //     border: '1px solid black'
    // }) 

    let myStyle = {
      color:props.mode === 'dark'?'white' : '#00457d',
      backgroundColor: props.mode === 'dark'? '#00457d':'white'
    }

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () =>{
    //      if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //      }
    //      else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor: 'white',
    //             border: '1px solid black'
    //         })
    //         setBtnText("Enable Dark Mode")
    //      }
    // }

  return (
    <div className="container">
      <h1 className="my-3" style={{color:props.mode === 'dark'?'white': '#042743'}}>About TextUtilities</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            TextUtilities gives you a way to analyze your text quickly and efficiently. Be it word count, character count, changing to upper or lower case, capitilizing words, Reading out text, Reversing the text, Copying long texts or Removing extra spaces.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            TextUtilities is a free character counter or various utilities tool that provides instant character count & word count statistics for a given text. TextUtilities reports the number of words and characters. Thus it is suitable for writing text with word/ character limit and gives a Preview of it.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext} </button>
      </div> */}
    </div>
  );
}
