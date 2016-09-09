import React from 'react'
import classes from './ItemsList.scss'
import Item from 'components/Item'

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchItems();
  }

  renderItems() {
    return this.props.items.all.map((item) => {
      return(<Item key={item.id} item={item} />)
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
