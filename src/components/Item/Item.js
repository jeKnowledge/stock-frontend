import React from 'react'
import classes from './Item.scss'

const Item = (props) => (
  <div className="col-xs-12 col-md-4">
    <div className="card">
      <img
        className="card-img-top img-fluid"
        src={props.item.photo_url}
        alt="Card image cap" 
        onClick={ (e) => {props.toggleModal('item-show', { itemID: props.item.id })} }
      />

      <div className="card-block">
        <h4 className="card-title">{props.item.name}</h4>
      </div>
    </div>
  </div>
);

export default Item;
