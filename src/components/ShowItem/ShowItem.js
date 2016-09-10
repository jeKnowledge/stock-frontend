import React from 'react'
import classes from './ShowItem.scss'

import WaitingQueueForm from 'components/WaitingQueueForm'
import NewBookingForm from 'components/NewBookingForm'

class ShowItem extends React.Component { 
  constructor(props) {
    super(props);
  }

  renderBookingOrWaitingQueueForm() {
    if (this.props.item.booked) {
      return(
        <WaitingQueueForm itemID={this.props.item.id} />
      )
    } else {
      return(
        <NewBookingForm itemID={this.props.item.id} />
      )
    }
  }

  renderBookings() {
    return this.props.item.bookings.map((b) => {
      return(
        <li
          key={b.id}
          className="list-group-item">
          {b.user.name}
        </li>
      )
    });
  }

  renderWaitingQueue() {
    return this.props.item.waiting_queue.map((wq) => {
      return(
        <li
          key={wq.id}
          className="list-group-item">
          {wq.user.name}
        </li>
      )
    });
  }

  render() {
    return(
      <div className={ `container-fluid ${classes.showItem}` }>
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={this.props.item.photo_url}
              alt="Card image cap" 
            />
          </div>
          <div className="col-md-6">
            { this.renderBookingOrWaitingQueueForm() }
          </div>
        </div>

        <div className="row">
          <h4>Old bookings</h4>
          <ul className="list-gtoup">
            { this.renderBookings() }
          </ul>
        </div>

        <div className="row">
          <h4>Waiting Queue</h4>
          <ul className="list-gtoup">
            { this.renderWaitingQueue() }
          </ul>
        </div>
      </div>
    )
  }
}

export default ShowItem;
