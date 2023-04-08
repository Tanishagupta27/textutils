import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light")
  const[btn,setbtn]=useState("Enable dark mode")
  const[alert,setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert({msg:message,
      type:type})
    setTimeout(()=>{
      setalert(null)},2000)
  }

  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      setbtn('Enable light mode')
      document.body.style.backgroundColor='#0e2b54'
      showalert("Dark mode enabled","success")
    }
    else{
      setMode('light')
      setbtn('Enable dark mode')
      document.body.style.backgroundColor='white'
      showalert("Light mode enabled","success")
    }
  } 

  return (
    <>
    <Router>
    <Navbar title="TextUtils" a={mode} b={togglemode} c={btn}/>
    <Alert a={alert}/>
    {/* <Textform heading="Enter the text to analyze below" a={mode} b={showalert}/> */}
    <Routes> 
          <Route exact path="/About" element={<About a={mode}/>}>
          </Route> 
          <Route path="/" element={<Textform heading="Enter the text to analyze below" a={mode} b={showalert}/>}> 
           </Route> 
    </Routes> 
   </Router> 
    </>
  );
}

export default App;
