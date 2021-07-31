import React from "react";

function librarySong({ song, songs, setCurrentSong, audioRef, isPlaying }) {
  const selectSongHandler = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div>
      <div onClick={selectSongHandler} className="library-song">
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
