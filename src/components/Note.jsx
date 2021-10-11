import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";
import Wavecom from "./Wavecom";
export default function Note(props){


    const [notes,setsNotes]=useState([]);


   if(props.prev  ) return(

        
  
            <div>
            <div class="container">
                <div>
                <form class="row g-3"onSubmit={(event)=>{
                    const formData = new FormData(event.currentTarget);
                    event.preventDefault();
                    for (let [key, value] of formData.entries()) {
                     
                      setsNotes((p)=>{
                          return [...p,[p.length+1  ,value]]
                      });
                    }}}>
  <div class="col-auto">
    
    
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Note</label>
    <input type="text" class="form-control" id="notei" placeholder="note"name="notii" />
  </div>
  <div class="col-auto">
    <button type="submit" class="btn  x btn-primary mb-3"name="submit">Ok</button>
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