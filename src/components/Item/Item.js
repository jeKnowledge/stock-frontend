import React from 'react'
import styles from './Item.scss'
import greenDot from './assets/green_dot.png'
import redDot from './assets/red_dot.png'

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.dot = props.item.booked ? redDot : greenDot;
  }

  render() {
    return(
      <div className="col-xs-12 col-md-4">
        <div className={ `card ${styles.itemCard}` }>
          <div className={ `card-block ${styles.itemCardImageBlock}` }>
            <img
              className="card-img-top img-fluid"
              src={this.props.item.photo_url}
              alt="Card image cap" 
              onClick={ (e) => {this.props.toggleModal('item-show', { itemID: this.props.item.id })} }
            />
          </div>

          <div className="card-block">
            <h4 className={ `card-title ${styles.cardTitle}` }>
              { this.props.item.name }
              <img
                className={ `pull-xs-right img-fluid ${styles.availabilityDot}` }
                src={ this.dot }
              />
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
