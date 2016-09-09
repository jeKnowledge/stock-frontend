import { connect } from 'react-redux'
import Modal from './Modal'

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  modals: state.modals
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
