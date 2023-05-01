/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/textForm';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#414c50';
      // #414c50
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" ShowAlert={showAlert} mode={mode}  />} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

Navbar.propTypes = { title: propTypes.string };

Navbar.defaultProps = { title: 'Set title here' };

export default App;
