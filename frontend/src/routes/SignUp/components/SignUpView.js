import { connect } from 'react-redux'
import actions from 'redux/actions/session'
import requireUnauthentication from '../../requireUnauthentication' 

import SignUpForm from 'containers/SignUpForm'

const mapDispatchToProps = {
  signUp: actions.signUp,
};

const mapStateToProps = (state) => ({
  session: state.session
});

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

export default requireUnauthentication(connectedComponent);
