// import logo from './logo.svg';
import './App.css';
import About from './components/About';
// import Navebar from './components/Navebar';
import Myheader from './components/Myheader';
import TextForm from './TextForm';
import TextForm2 from './TextForm2';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  function toggleMode(){
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'white';
      setAlert('Dark Mode has been enabled');
      document.title = 'Text Manipulation - darkmode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setAlert('Light Mode has been enabled');
      document.title = 'Text Manipulation';
    }
  }
  setTimeout(() => {
        setAlert(null);
  }, 3000);

  return (
    // <div classNameNameName="App">
    //   <header classNameNameName="App-header">
    //     <img src={logo} classNameNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with  Yaqoob Ali
    //     </a>
    //   </header>
    // </div>
    <>
    <Myheader title = "TEXT MANIPULATION" mode = {mode} toggleMode = {toggleMode}/> 
    <Alert message = {alert}/>
      {/* <Navebar title = "Ali Ahmed" aboutText = "About Text" placeholderText = "Search here"/> */}
      {/* <Navebar/> */}
      <div className="container my-3" >
      {/* <TextForm analyzeHeading = "Enter the Text" heading = "Enter the text to analyze"/> */}
      <TextForm2 heading ='Analyzer' mode = {mode} setAlert = {setAlert} />
      {/* <About/> */}
      </div>

    </>
  );
}

export default App;
