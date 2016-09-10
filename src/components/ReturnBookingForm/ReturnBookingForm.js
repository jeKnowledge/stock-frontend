import React from 'react'
import classes from './ReturnBookingForm.scss'

class ReturnBookingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.returnBooking(this.props.bookingID);
  }

  //renderError() {
    //let apiState = this.props.api['returnBooking'] || {};
    //if (apiState.message === null || apiState.message === undefined) return '';
    //return(
      //<p className="bg-danger">
        //{ apiState.message }
      //</p>
    //)
  //}

  render() {
    // TODO add error rendering { this.renderError() }
    
    return(
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <input
          className="btn btn-block btn-danger"
          type="submit"
          value="Return item"
        />
      </form>
    )
  }
}

export default ReturnBookingForm; 
