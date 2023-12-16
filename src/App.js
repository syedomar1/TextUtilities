// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type});
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled","success");
      // document.title = 'TextUtilities - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtilities is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtilities now'
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled","success");
      // document.title = 'TextUtilities - Light Mode'
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtilities" aboutText="About TextUtilities"/> */}
    {/* <Navbar/> */}
    <Router>
      <Navbar title='TextUtilities' aboutText='About' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='constainer my-3'>
      <Routes>
          <Route exact path='/about' element={<About mode={mode}/>}/>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading = "Try TextUtilities - Enter the text to analyze below" mode={mode}/>}/>
      </Routes>
      </div>
    </Router>
    </>
      
      // Day 10
      /* <div className='container my-3'>
      <About/>
      </div> */

      // Day 8
      /* {<div className="container my-3">
    <TextForm heading = "Enter the text to analyze below"/>
    </div>} */


    //   <> Day 1
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React with Omar
    //       </a>
    //     </header>
    //   </div>
    // </>

    // <> Day 3
    // let name = "Omar";
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </nav>
    // <img src="" alt="" />
    // <div className="container">
    //   <h1>Hello {name}</h1>
    //   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat similique voluptatibus itaque voluptate quia! Ut aut nulla maiores, fuga impedit ratione? Animi qui perspiciatis quaerat, beatae iste illo suscipit nihil!</p>
    // </div>
    // </>
    );
}

export default App;
