import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({ currentSong, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

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
        <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </div>
    </div>
  );
}

export default Player;
