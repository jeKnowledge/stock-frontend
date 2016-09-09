import { connect } from 'react-redux'
import actions from 'redux/actions/modals'
import Modal from './Modal'

const mapDispatchToProps = {
  toggleModal: actions.toggleModal
};

const mapStateToProps = (state) => ({
  modals: state.modals
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
