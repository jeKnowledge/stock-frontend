import { connect } from 'react-redux'
import requireUnauthentication from '../../utils/requireUnauthentication' 
import actions from 'redux/actions/session'

import SignUpForm from 'components/SignUpForm'

const mapDispatchToProps = {
  signUp: actions.signUp,
};

const mapStateToProps = (state) => ({
  session: state.session
});

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

export default requireUnauthentication(connectedComponent);
