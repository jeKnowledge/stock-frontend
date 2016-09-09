import React from 'react'
import classes from './ShowItemModal.scss'

import Modal from 'components/Modal'
import ShowItem from 'components/ShowItem'

class ShowItemModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Modal
        id="item-show"
        title="Item">
        <ShowItem />
      </Modal>
    );
  }
}

export default ShowItemModal;
