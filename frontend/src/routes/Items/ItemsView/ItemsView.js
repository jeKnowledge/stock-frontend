import React from 'react'
import classes from './ItemsView.scss'

import ItemsList from 'components/ItemsList'
import NewItemModal from 'components/NewItemModal'

const ItemsView = (props) => (
  <div>
    <ItemsList />
    <NewItemModal />
  </div>
);

export default ItemsView;
