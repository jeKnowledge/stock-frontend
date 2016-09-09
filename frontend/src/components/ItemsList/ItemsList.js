import React from 'react'
import classes from './ItemsList.scss'
import Item from 'components/Item'

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    return this.props.items.map((item) => {
      return(<Item key={item.id} data={item} />)
    });
  }
  
  render() {
    return(
      <div className="row">
        { this.renderItems() }
      </div>
    )
  }
}

export default ItemsList;
