import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";

function App() {

  const[themeMode, setThemeMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    debugger
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggelTheme = () => {
    debugger
    if(themeMode === 'light'){
      setThemeMode('dark');
      document.body.style.backgroundColor = 'rgb(6 84 112)';
      showAlert('success', 'Dark Theme Enabled!')
      document.title = 'TextUtils App - Dark Mode';
    }
    else{
      setThemeMode('light');
      document.body.style.backgroundColor = '';
      showAlert('success', 'Light Theme Enabled!');
      document.title = 'TextUtils App - Light Mode';
    }    
  }
  
  return (
    <>
    <Alert alert = {alert}/>
    <Navbar title="TextUtiles App" themeMode={themeMode} toggelTheme = {toggelTheme} aboutTextUtils="About TextUtils App"/>
    <div className="container my-3">
      <About themeMode={themeMode} toggelTheme = {toggelTheme}/>
    </div>
    <div className="container my-3">
      <TextForm heading = "Enter text to update." themeMode={themeMode} toggelTheme = {toggelTheme} showAlert={showAlert}/>
    </div>
    </>
  );
  
}

export default App;
