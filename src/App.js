import './App.css';
import Myheader from './components/Myheader';
import TextForm2 from './TextForm2';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.body.style.color = 'white';
      setAlert('Dark Mode has been enabled');
      document.title = 'Text Manipulation - darkmode'
    }

    else {
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
    <>
      <Myheader title="TEXT MANIPULATION" mode={mode} toggleMode={toggleMode} />
      <Alert message={alert} />
      <div className="container my-3" >
        <TextForm2 mode={mode} setAlert={setAlert} />
      </div>

    </>
  );
}

export default App;
