import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({ isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo }) {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div>
      <div className="player-container">
        <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>
          <input
            min={0}
            value={songInfo.currentTime}
            max={songInfo.duration}
            className="range"
            type="range"
            onChange={dragHandler}
          />
          <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className="song-control">
          <FontAwesomeIcon size="2x" className="skip-back" icon={faAngleLeft} />
          <FontAwesomeIcon
            size="2x"
            className="play"
            onClick={playSongHandler}
            icon={isPlaying ? faPause : faPlay}
          />
          <FontAwesomeIcon
            size="2x"
            className="skip-forward"
            icon={faAngleRight}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
