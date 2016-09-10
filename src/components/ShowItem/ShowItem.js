import React from 'react'
import styles from './ShowItem.scss'

import WaitingQueueForm from 'components/WaitingQueueForm'
import NewBookingForm from 'components/NewBookingForm'
import ReturnBookingForm from 'components/ReturnBookingForm'

class ShowItem extends React.Component { 
  constructor(props) {
    super(props);
  }

  // TODO move current booking to a react component
  renderCurrentBooking() {
    let userName = this.props.item.current_booking.user.name;
    let form = <WaitingQueueForm itemID={this.props.item.id} />

    let currentUserOwnsTheItem = this.props.session.user.id === this.props.item.current_booking.user.id;
    if (currentUserOwnsTheItem) {
      userName = 'You';
      form = <ReturnBookingForm bookingID={this.props.item.current_booking.id} />
    }

    return(
      <div>
        <h5>{userName}</h5> 
        <p>owns this item until <span className="tag tag-info">{new Date(this.props.item.current_booking.end_date).toDateString()}</span></p>

        { form }
      </div>
    );
  }

  renderBookingFormOrCurrentBooking() {
    if (this.props.item.booked) {
      return this.renderCurrentBooking();
    } else {
      return(
        <NewBookingForm itemID={this.props.item.id} />
      )
    }
  }
  
  renderBookings() {
    if (this.props.item.bookings.length <= 0) return '';
    let bookings = this.props.item.bookings.map((b) => {
      return(
        <li
          key={b.id}
          className="list-group-item">
          {b.user.name}
          <p className="pull-xs-right">from <span className="tag tag-info">{new Date(b.start_date).toDateString()}</span> to <span className="tag tag-info">{new Date(b.end_date).toDateString()}</span></p>
        </li>
      )
    });

    return(
      <div className={`row ${styles.row}`}>
        <h5>Old bookings</h5>
        <ul className="list-group">
          { bookings }
        </ul>
      </div>
    )
  }

  renderWaitingQueue() {
    if (this.props.item.waiting_queue.length <= 0) return '';
    let waitingQueueEntries = this.props.item.waiting_queue.map((wq) => {
      return(
        <li
          key={wq.id}
          className="list-group-item">
          {wq.user.name}
        </li>
      )
    });

    return(
      <div className={`row ${styles.row}`}>
        <h5>Waiting Queue</h5>
        <ul className="list-group">
          { waitingQueueEntries }
        </ul>
      </div>
    )
  }

  render() {
    return(
      <div className={ `container-fluid` }>
        <div className={`row ${styles.row}`}>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={this.props.item.photo_url}
              alt="Card image cap" 
            />
          </div>
          <div className="col-md-6">
            { this.renderBookingFormOrCurrentBooking() }
          </div>
        </div>

        { this.renderBookings() }

        { this.renderWaitingQueue() }
      </div>
    )
  }
}

export default ShowItem;
