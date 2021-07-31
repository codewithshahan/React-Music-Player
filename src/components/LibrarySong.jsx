import React from "react";
import playAudio from "./utils";

function librarySong({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  id,
}) {
  const selectSongHandler = () => {
    setCurrentSong(song);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
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

    playAudio(isPlaying, audioRef);
  };

  return (
    <div>
      <div
        onClick={selectSongHandler}
        className={`library-song ${song.active ? "selected" : ""}`}
      >
        <img
          src={song.cover}
          className="cover"
          alt="songs images when selected"
        />
        <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
    </div>
  );
}

export default librarySong;
