import { connect } from 'react-redux'
import requireUnauthentication from '../../requireUnauthentication' 
import actions from 'redux/actions/session'

import SignInForm from 'containers/SignInForm'

const mapDispatchToProps = {
  signIn: actions.signIn,
};

const mapStateToProps = (state) => ({
  session: state.session
});

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

export default requireUnauthentication(connectedComponent);
