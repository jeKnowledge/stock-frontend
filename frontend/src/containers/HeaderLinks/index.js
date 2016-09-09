import { connect } from 'react-redux'
import actions from 'redux/actions/session'
import HeaderLinks from './HeaderLinks'

const mapDispatchToProps = {
  logout: actions.logout
};

const mapStateToProps = (state) => ({
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);
