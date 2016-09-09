import React from 'react'
import classes from './ItemsView.scss'

import ItemsList from 'components/ItemsList'
import NewItemModal from 'components/NewItemModal'
import ShowItemModal from 'components/ShowItemModal'

const ItemsView = (props) => (
  <div>
    <ItemsList />
    <NewItemModal />
    <ShowItemModal />
  </div>
);

export default ItemsView;
