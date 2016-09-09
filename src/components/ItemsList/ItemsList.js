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
    let itemsByID = this.props.items.byID;
    return this.props.items.all.map((id) => {
      return(
        <Item
          key={id}
          item={itemsByID[id]}
          />
      );
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
