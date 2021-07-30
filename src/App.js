import React, { useState } from "react";
import Songs from "./components/Songs";
import Player from "./components/player";
import "./styles/app.scss";
import data from "./data";
import Library from "./components/Library";

function App(props) {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Songs currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        isPlaying={isPlaying}
      />
      <Library currentSong={currentSong} songs={songs} />
    </div>
  );
}

export default App;
