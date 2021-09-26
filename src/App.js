import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import Alert from './components/Alert'

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  function setAlertState(message) {
    setAlert({
      message: message,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  function toggleMode() {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.color = '#fff'
      document.body.style.backgroundColor = "#171e24"
      setAlertState("Dark Mode Enabled !")
    }
    else {
      setMode('light')
      document.body.style.color = '#000'
      document.body.style.backgroundColor = "#fff";
      setAlertState("Light Mode Enabled !")
    }
  }

  return (
      <div className="myFont">
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
              <TextArea mode={mode} setAlertState={setAlertState} />
        </div>
      </div>

  );
}

export default App;
