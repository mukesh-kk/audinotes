import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Uploadbtn  from './Uploadbtn';
function App() {
  return (
   <Router>
     <div className="mains"><h1 style={{color:"white",marginLeft:"20px",marginTop:"0"}}>Audi<span style={{color:"#374f69",textShadow:"4px 1px 3px  pink",marginTop:"0"}}>Note</span></h1>
 

     <Uploadbtn/>

  
  </div>
  
   </Router>
  
   );
}

export default App;
