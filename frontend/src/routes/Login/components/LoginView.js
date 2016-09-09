import { connect } from 'react-redux'
import actions from 'redux/actions/session'
import requireUnauthentication from '../../requireUnauthentication' 

import LoginForm from 'components/LoginForm'

const mapDispatchToProps = {
  login: actions.login,
};

const mapStateToProps = (state) => ({
  session: state.session
});

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default requireUnauthentication(connectedComponent);
