import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black"
  });

  // to make background change as per theme buttons
  const changeTheme = (navcolor, bodycolor, textcolor) => {
    setStyle({
      backgroundColor: navcolor,
      color: textcolor
    });
    document.body.style.backgroundColor = bodycolor;
    document.body.style.color = textcolor;
    showAlert(`${bodycolor} Mode enabled`, "success");
  }

  const changeMode = () => {
    if (text === "Enable Dark Mode") {
      setStyle({
        backgroundColor: "black",
        color: "white"
      });
      setText("Enable Light Mode");
      document.body.style.backgroundColor = "#02335e";
      document.body.style.color = "white";
      showAlert("Dark Mode enabled", "success");
    } else {
      setStyle({
        backgroundColor: "white",
        color: "black"
      });
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode enabled", "success");
    }
  }

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Router>
        <Navbar title="Textify" aboutText="About Us" mode={changeMode} theme={changeTheme} style={style} text={text} />
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<TextForm mode={changeMode} style={style} body={document.body} alert={alert} showAlert={showAlert} />} />
            <Route path="/about" element={<About style={style} />} />
          </Routes>
          <Alert alert={alert} />
        </div>
      </Router>
    </>
  );
}

export default App;
