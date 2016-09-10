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
    //let apiState = this.props.api['enterWaitingQueue'] || {};
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
          className="btn btn-block btn-success"
          type="submit"
          value="Enter on the waiting queue"
        />
      </form>
    )
  }
}

export default WaitingQueueForm; 
