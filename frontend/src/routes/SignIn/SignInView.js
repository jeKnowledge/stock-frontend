import { connect } from 'react-redux'
import requireUnauthentication from '../../utils/requireUnauthentication' 
import actions from 'redux/actions/session'

import SignInForm from 'components/SignInForm'

const mapDispatchToProps = {
  signIn: actions.signIn,
};

const mapStateToProps = (state) => ({
  session: state.session
});

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

export default requireUnauthentication(connectedComponent);
