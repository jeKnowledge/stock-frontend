import React from 'react'
import classes from './WaitingQueueForm.scss'

class WaitingQueueForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.enterWaitingQueue(this.props.itemID);
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
        <input
          className="btn btn-block btn-success"
          type="submit"
          value="Enter on the waiting queue"
        />
      </form>
    )
  }
}

export default WaitingQueueForm; 
