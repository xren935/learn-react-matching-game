import React from 'react'

import './Tile.css'

const Tile = (porps) => {
  //if selected or matched -> tile color is backgroundColor
  //null if otherwise
  const dynamicColor = ((props.selected) || (props.matched)) ? { backgroundColor: props.color }: null;
  //<props.svg />
  return (
    <div className='Tile' style={dynamicColor}>
    { (props.selected || props.matched) ? <props.svg /> : null}
    </div>
  )
}

export default Tile
