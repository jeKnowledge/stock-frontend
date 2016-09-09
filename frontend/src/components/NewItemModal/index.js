import { connect } from 'react-redux'
import actions from 'redux/actions/modals'

import NewItemModal from './NewItemModal'

const mapDispatchToProps = {
  toggleModal: actions.toggleModal
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewItemModal);
