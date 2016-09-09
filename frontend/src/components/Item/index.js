import { connect } from 'react-redux'
import actions from 'redux/actions/modals'
import Item from './Item'

const mapDispatchToProps = {
  toggleModal: actions.toggleModal
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
