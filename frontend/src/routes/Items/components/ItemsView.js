import React from 'react'
import requireAuthentication from '../../requireAuthentication' 

import ItemsList from 'components/ItemsList'
import Modal from 'containers/Modal'

const ItemsView = () => (
  <div>
    <ItemsList />

    <Modal id="add-item">
      <p>kjghdsf</p>
    </Modal>
  </div>
)

export default requireAuthentication(ItemsView);
