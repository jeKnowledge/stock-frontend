import React from 'react'
import classes from './ShowItem.scss'

const ShowItem = (props) => (
  <div>
    <img
      className="img-fluid"
      src={props.item.photo_url}
      alt="Card image cap" 
    />
  </div>
)

export default ShowItem;
