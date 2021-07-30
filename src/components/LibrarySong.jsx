import React from "react";

function librarySong({ song }) {
  return (
    <div>
      <div className="library-song">
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
