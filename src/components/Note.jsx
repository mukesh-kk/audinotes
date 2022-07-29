import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";
import Wavecom from "./Wavecom";
export default function Note(props){


    const [notes,setsNotes]=useState([]);


   if(props.prev  ) return(

        
  
            <div>
            <div class="container">
                <div>
                <form class="row g-3 mt-5 ms-3" onSubmit={(event)=>{
                    const formData = new FormData(event.currentTarget);
                    event.preventDefault();
                    for (let [key, value] of formData.entries()) {
                     
                      setsNotes((p)=>{
                          return [...p,[p.length+1  ,value]]
                      });
                    }}}>

  
    <div style={{display:"flex",justifyContent:"center" ,width:"40%"}} ><input style={{height:"2.3em",padding:"3px",alignSelf:"center",borderRadius:"5px",outlineStyle:"none",borderStyle:"none"}} type="text" class="w-100" id="notei" placeholder="Add your notes"name="notii" />
    <button  style={{alignSelf:"center",}}type="submit" class=" ms-5 x"name="submit">ADD</button>
    </div>
  
</form>
 </div>
                    
  <div class="row mt-3">
    
 
    <div class="col-md-5 col-10 align-self-end">
    {/* {notes.map((note)=>{
return <p className="notepara"><span className="timestmp">{note[0]}</span> : {note[1]}</p>
             })} */}

             <div className="notesflex">
             <div className="line"><div className="line2">Sn</div><div className="line3">Your Notes </div></div>
                 {notes.map((note)=>{
                     return <div className="line"><div className="line0">{note[0]}</div><div className="line1">{note[1]}</div></div>
                 })}
             </div>
    </div>
  </div>
</div>
         
            </div>
        
        
        
        

    );
    else return (<div></div>);
}