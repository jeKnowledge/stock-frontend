import { connect } from 'react-redux'
import sessionActions from 'redux/actions/session'
import modalsActions from 'redux/actions/modals'
import HeaderLinks from './HeaderLinks'

const mapDispatchToProps = {
  logout: sessionActions.logout,
  toggleModal: modalsActions.toggleModal,
  refreshSession: sessionActions.refreshSession
};

const mapStateToProps = (state) => ({
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);
