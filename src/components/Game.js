import React from "react";
import MemoryCards from "./MemoryCards";
import '../css/Game.css';
import NavBar from "./NavBar";


class Game extends React.Component {
  state = {
   BeginGame: true,
    turns: 0,
    score: 0,
  };

  

  render() {
    const { BeginGame, turns, score} = this.state;

    return (
      <div className="game">
        <NavBar turns={turns} score={score} /> 
        <div className="cards"><MemoryCards  BeginGame={this.handleBeginGame}/></div>        
      </div>
    );
  }
}

export default Game;
