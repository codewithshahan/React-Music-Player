import React from "react";
import LibrarySong from "./LibrarySong";

function library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "library-toggle" : ""}`}>
      <h2>Librar</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            key={song.id}
            audioRef={audioRef}
            id={song.id}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default library;
