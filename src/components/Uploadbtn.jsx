
import React, { useEffect, useState, useRef } from "react";

import Wavecom from "./Wavecom";
import Note from "./Note";
 function toTime(params){
    
    return    Math.round(params/60)+":"+params-60*Math.round(params/60);
    

}



function Uploadbtn() {
    const fileInputRef = React.useRef();

    const [audio, setAudio] = React.useState();
    const [prev, setPrev] = useState();
    
    
   
    useEffect(() => {
        if (audio) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPrev(reader.result);

            }
            reader.readAsDataURL(audio);
            //console.log(prev);
        } else {
            setPrev(null);
        }
    }, [audio]);


    return (<div>

        <form>
       
            <input type="file" style={{ display: "none" }} accept="audio/*" ref={fileInputRef}

                onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                        setAudio(file);

                    } else {
                        setAudio(null);
                    }
                }}

            />
            {prev ? <div style={{ display: "flex", justifyContent: "center", alignSelf: "center" }}>

            </div> :
                <div style={{ display: "flex", justifyContent: "center", alignSelf: "center", alignItems:"center" ,textDecoration: "none" }}>
                    <button id="uploadbtn" class="btn btn-outline-secondary" type="submit" onClick={(event) => {
                        event.preventDefault();
                        fileInputRef.current.click();

                    }}>Upload Your Music</button></div>}
          
        </form>
        <div>

            
            <Wavecom prev={prev}/>
           <p className="hovertext">Click To add Note </p>
       
           <Note prev={prev}/>


        </div>



    </div>


    )
}
//<i class="fas fa-play"></i>
//<i class="fas fa-pause"></i>
//<i class="fas fa-volume-up"></i>
//<i class="fas fa-volume-mute"></i>
//<i class="far fa-edit"></i>
//<i class="fas fa-check"></i>
export default Uploadbtn;