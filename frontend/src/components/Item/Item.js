import React from 'react'
import classes from './Item.scss'


class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // VOU DAR RENDER DE UM SÓ ITEM
    
    return(
      <h1> {this.props.data} </h1>
    )
  }
}

export default Item
