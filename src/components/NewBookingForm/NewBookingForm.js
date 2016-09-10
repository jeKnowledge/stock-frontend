import React from 'react'
import classes from './NewBookingForm.scss'

class NewBookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item_id: this.props.itemID, startDate: '', endDate: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking(this.state);
  }

  handleChange(e) {
    let name = e.target.getAttribute('name');
    let newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
  }

  renderError() {
    let apiState = this.props.api['createBooking'] || {};
    if (apiState.message === null || apiState.message === undefined) return '';
    return(
      <p className="tag tag-danger">
        { apiState.message }
      </p>
    )
  }

  render() {
    return(
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <p><b>Book</b> this item from</p>

        <div className="form-group">
          <input
            className="form-control"
            type="date"
            name="startDate"
            onChange={ (e) => this.handleChange(e) }
          />
        </div>

        <p>to</p>

        <div className="form-group">
          <input
            className="form-control"
            type="date"
            name="endDate"
            onChange={ (e) => this.handleChange(e) }
          />
        </div>

        { this.renderError() }

        <input
          className="btn btn-block btn-success"
          type="submit"
          value="Book"
        />
      </form>
    )
  }
}

export default NewBookingForm; 
