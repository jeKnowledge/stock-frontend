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

  renderError() {
    let apiState = this.props.api['enterWaitingQueue'] || {};
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
        { this.renderError() }

        <input
          className="btn btn-block btn-success"
          type="submit"
          value="Let me know when the item is available"
        />
      </form>
    )
  }
}

export default WaitingQueueForm; 
