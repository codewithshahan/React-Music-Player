import React from "react";
import Songs from "./components/songs";
import Player from "./components/player";
import "./styles/app.scss";

function App(props) {
  return (
    <div>
      <Songs />
      <Player />
    </div>
  );
}

export default App;
