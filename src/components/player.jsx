import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

function player(props) {
  return (
    <div>
      <div className="player-container">
        <div className="time-control">
          <p>start</p>
          <input className="range" type="range" name="" id="" />
          <p>end</p>
        </div>
        <div className="song-control">
          <FontAwesomeIcon size="2x" icon={faAngleLeft} />
          <FontAwesomeIcon size="2x" icon={faPlay} />
          <FontAwesomeIcon size="2x" icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
}

export default player;
