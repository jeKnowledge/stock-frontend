import React from 'react'
import classes from './ShowItemModal.scss'

import Modal from 'components/Modal'
import ShowItem from 'components/ShowItem'

class ShowItemModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let modal = this.props.modals['item-show'];
    if (modal === undefined) return null;

    let item = this.props.items.byID[modal.itemID];
    return(
      <Modal
        id="item-show"
        title={item.name}>
        <ShowItem item={item}/>
      </Modal>
    );
  }
}

export default ShowItemModal;
