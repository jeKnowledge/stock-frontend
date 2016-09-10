import React from 'react'
import classes from './NewBookingForm.scss'

class NewBookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item_id: this.props.itemID, startDate: '', endDate: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.book(this.state);
    this.setState({ startDate: '', endDate: '' });
    //this.props.onSubmit();
  }

  handleChange(e) {
    let name = e.target.getAttribute('name');
    let newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
  }

  //renderError() {
    //if (this.props.items.fetchingError === null) return '';
    //return(
      //<p className="bg-danger">
        //{ this.props.items.fetchingError }
      //</p>
    //)
  //}

  render() {
    // ADD { this.renderError() }
    
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
