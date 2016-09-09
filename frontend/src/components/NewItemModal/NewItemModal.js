import React from 'react'
import classes from './NewItemModal.scss'

import Modal from 'components/Modal'
import NewItemForm from 'components/NewItemForm'

class NewItemModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Modal id="new-item">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            onClick={ (e) => {this.props.toggleModal('new-item') } }>
            <span>&times;</span>
          </button>
          <h4 className="modal-title">Create New Item</h4>
        </div>
        <div className="modal-body">
          <NewItemForm
            onSubmit={ (e) => { this.props.toggleModal('new-item') } }/>
        </div>
      </Modal>
    )
  }
}

export default ItemsList;
