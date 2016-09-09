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
      <Modal
        id="item-new"
        title="Create New Item">
        <NewItemForm
          onSubmit={ (e) => { this.props.toggleModal('item-new') } }/>
      </Modal>
    );
  }
}

export default NewItemModal;
