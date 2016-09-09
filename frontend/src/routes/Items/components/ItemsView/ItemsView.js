import React from 'react'
import classes from './ItemsView.scss'

import ItemsList from 'components/ItemsList'
import Modal from 'containers/Modal'
import NewItemForm from 'containers/NewItemForm'

class ItemsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ItemsList />

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
      </div>
    );
  }
}

export default ItemsView;
