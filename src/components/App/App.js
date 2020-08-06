import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import { createTiles } from '../../misc/utils' 
import './App.css';


class App extends Component{
  constructor(props){
    super(props); 

    this.state = {
      playing = false, 
      numTiles = 36, 
      tiles = [],
      previousTileIndex = null,
      toBeCleared = null
   } 
  }

  startGame = (numTiles) => {
    this.setState((state) => ({
      playing: true, 
      previousTileIndex: null, 
      toBeCleared: null, 
      tiles = createTiles(state.numTiles)
    }))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={this.state.playing} numTiles={this.state.numTiles}/>
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles}/>
 
    </div>
  );

  }
}

export default App;
