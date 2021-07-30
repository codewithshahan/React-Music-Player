import React from "react";

function songs({ currentSong }) {
  return (
    <div>
      <div className="songs-container">
        <img src={currentSong.cover} alt="songs images when selected" />
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>
    </div>
  );
}

export default songs;
