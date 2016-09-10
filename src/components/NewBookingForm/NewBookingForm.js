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
    this.setState({ startDate: '', endDate: '' });
  }

  handleChange(e) {
    let name = e.target.getAttribute('name');
    let newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
  }

  //renderError() {
    //let apiState = this.props.api['createBooking'] || {};
    //if (apiState.message === null || apiState.message === undefined) return '';
    //return(
      //<p className="bg-danger">
        //{ apiState.message }
      //</p>
    //)
  //}

  render() {
    // TODO render de erros { this.renderError() }
    
    return(
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <div className="form-group">
          <label>From</label>
          <input
            className="form-control"
            type="date"
            name="startDate"
            onChange={ (e) => this.handleChange(e) }
          />
        </div>

        <div className="form-group">
          <label>To</label>
          <input
            className="form-control"
            type="date"
            name="endDate"
            onChange={ (e) => this.handleChange(e) }
          />
        </div>

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
