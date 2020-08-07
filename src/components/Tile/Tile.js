import React from 'react'

import './Tile.css'

const Tile = (porps) => {
  //if selected or matched -> tile color is backgroundColor
  //null if otherwise
  var dynamicColor = ((props.selected) || (props.matched)) ? { backgroundColor: props.color }: null;
  //<props.svg />
  return (
    <div className='Tile' style={this.props.dynamicColor}>
    { (props.selected || props.matched) ? <svg {...svg}/> : null}
    </div>
  )
}

export default Tile
