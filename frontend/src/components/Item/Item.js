import React from 'react'
import classes from './Item.scss'

export const Item = (props) => (
  <div className="col-xs-12 col-md-4">
    <div className="card">
      <img className="card-img-top img-fluid" src={props.item.photoUrl} alt="Card image cap" />
      <div className="card-block">
        <h4 className="card-title">{props.item.name}</h4>
        <a href="#" className="btn btn-primary">Info</a>
      </div>
    </div>
  </div>
)

export default Item;
