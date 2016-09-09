import React from 'react'
import classes from './Item.scss'

export const Item = (props) => (
  <div className="col-xs-12 col-md-4">
    <div className="card">
      <img className="card-img-top img-fluid" src="http://cdn.mos.techradar.com/art/Wearables/Oculus/Studio%20shots/Oculus_Rift_25-1200-80.jpg" alt="Card image cap" />
      <div className="card-block">
        <h4 className="card-title">{props.data}</h4>
        <p className="card-text">kgjdhf</p>
        <a href="#" className="btn btn-primary">Info</a>
      </div>
    </div>
  </div>
)

export default Item;
