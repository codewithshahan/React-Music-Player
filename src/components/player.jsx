import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import playAudio from "./utils";

function Player({
  isPlaying,
  currentSong,
  setCurrentSong,
  songs,
  setIsPlaying,
  audioRef,
  setSongInfo,
  setSongs,
  songInfo,
}) {
  // useeffect
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  }, [currentSong]);

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

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);

        return;
      }

      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(isPlaying, audioRef);
  };

  return (
    <div>
      <div className="player-container">
        <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>
          <input
            min={0}
            value={songInfo.currentTime || 0}
            max={songInfo.duration || 0}
            className="range"
            type="range"
            onChange={dragHandler}
          />
          <p>{getTime(songInfo.duration || 0)}</p>
        </div>
        <div className="song-control">
          <FontAwesomeIcon
            size="2x"
            onClick={() => skipTrackHandler("skip-back")}
            className="skip-back"
            icon={faAngleLeft}
          />
          <FontAwesomeIcon
            size="2x"
            className="play"
            onClick={playSongHandler}
            icon={isPlaying ? faPause : faPlay}
          />
          <FontAwesomeIcon
            size="2x"
            onClick={() => skipTrackHandler("skip-forward")}
            className="skip-forward"
            icon={faAngleRight}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
