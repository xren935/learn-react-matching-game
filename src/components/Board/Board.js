import React from 'react'
import './Board.css';
import { Tile } from '../Tile';

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  const tiles = props.tiles.map((tile) => (<Tile {...tile}/>)); //passing in all the props of the tile object one by one using the spread syntax


  return (
    <div className='Board' style={gridConfig}>
    {tiles}
    </div>
  )
}

export default Board
