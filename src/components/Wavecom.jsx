import React, { useEffect, useState, useRef } from "react";

import Note from "./Note";
var WaveSurfer = require("wavesurfer.js");
function toTime(params) {
  return Math.round(params / 60) + ":" + params - 60 * Math.round(params / 60);
}
function equlityofprev(p, n) {
  if (p.prev === n.prev) return true;
  else {
    return false;
  }
}
const Wavecom = React.memo(function Wavecom(props) {
  if (props.prev) {
    var wavesurfer = WaveSurfer.create({
      container: "#waveform1",
      waveColor: "pink",
      progressColor: "#6788a9",
      barWidth: "1",
      barGap: ".2",
      responsive: "true",
      cursorColor: "white",
      backgroundColor: "rgba(255,255,255,.05)",
    });
    wavesurfer.on("ready", function () {
      wavesurfer.play();
    });
    wavesurfer.on("seek", (prog) => {});
    wavesurfer.load(props.prev);
  }

  if (props.prev)
    return (
      <div>
        <div
          id="waveform"
          className="waveformcont"
          onMouseOver={(e) => console.log(e)}
        ></div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <button
              onClick={(e) => {
                wavesurfer.playPause();
              }}
              class="btn btn-outline-secondary"
            >
              <i class="fas fa-play"></i>/<i class="fas fa-pause"></i>{" "}
              Play/Pause
            </button>
            <button
              class="btn btn-outline-secondary"
              onClick={(e) => {
                wavesurfer.toggleMute();
              }}
            >
              <i class="fas fa-volume-up"></i>/
              <i class="fas fa-volume-mute"></i> Mute/Unmute
            </button>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div
        id="waveform1"
        className="waveformcont"
        onMouseOver={(e) => console.log(e)}
      ></div>
    );
  }
}, equlityofprev);
export default Wavecom;
