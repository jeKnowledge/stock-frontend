import React from 'react'
import requireAuthentication from '../../requireAuthentication' 

import ItemsList from 'components/ItemsList'
import Modal from 'containers/Modal'
import NewItemForm from 'containers/NewItemForm'

const ItemsView = () => (
  <div>
    <ItemsList />

    <Modal id="new-item">
      <div className="modal-header">
        <h4 className="modal-title">Create New Item</h4>
      </div>
      <div className="modal-body">
        <NewItemForm />
      </div>
    </Modal>
  </div>
)

export default requireAuthentication(ItemsView);
