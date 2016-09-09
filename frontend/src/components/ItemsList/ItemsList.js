import React from 'react'
import classes from './ItemsList.scss'
import Item from 'components/Item'


class ItemsList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // VOU DAR RENDER DOS ITEMS TODOS QUE TENHO GUARDADOS NA BASE DE DADOS
    //

    console.log(this.props.items)
    return(
      // map de props e render de cada prop
      <div>
        { this.props.items.map((item) => { return(<Item data={item} /> )}) }
      </div>
    )
  }
}

export default ItemsList
