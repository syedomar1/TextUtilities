// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    {/* <Navbar/> */}
    <div className="container my-3">
    <TextForm heading = "Enter the text to analyze below"/>
    </div>
    </>
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
