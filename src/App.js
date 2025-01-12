
import { useState } from "react";
import About from "./About";
import "./App.css";
import Navbar from "./Navbar";
import Textform from "./Textform";
import Alert from "./components.js/Alert";
import { createBrowserRouter,RouterProvider,BrowserRouter as Router,Switch,Route,Link, BrowserRouter } from "react-router-dom";
// import API from "./practice";
let myStyle={
  color:"red",
  BackgroundColor:"blue"
}






function App() {
   const [mode,setMode]=useState('light')
   const[alert,setAlert]=useState(null);

   const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type

    })
    setTimeout(()=>{
      setAlert(null);

    },1500)
   }



   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#60628b';
      showAlert('Dark mode has been enabled.','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled.',"success")
    }
  }

  const router=createBrowserRouter([
    {path:"/",element: <Textform showAlert={showAlert} heading="Enter the text to analyze"mode={mode}/>},
    {path:"/",element: <About/>}

  ])
  return(
    <>
    
   {/* <Router> */}
    <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <RouterProvider router={router}/>
    <div className="container my-3 ">
    {/* <Textform showAlert={showAlert} heading="Enter the text to analyze"mode={mode}/> */}
    {/* <div className="container">
      <Switch>
        <Route path="/about">
        <About/>
        
        </Route>
       < Route path="/">
       <Textform showAlert={showAlert} heading="Enter the text to analyze"mode={mode}/>
        
        
        </Route>

      </Switch> */}
  

    {/* </div> */}
   


    </div>
    {/* </Router> */}
    {/* <API/> */}
    
   
    
    </>
  )
}
  
export default App;
