import React from "react";
import LibrarySong from "./LibrarySong";

function library({ songs }) {
  return (
    <div className="library">
      <h2>Librar</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong song={song} />
        ))}
      </div>
    </div>
  );
}

export default library;
