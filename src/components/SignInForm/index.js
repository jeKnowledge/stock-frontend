import { connect } from 'react-redux'
import actions from 'redux/actions/session'
import SignInForm from './SignInForm'

const mapDispatchToProps = {
  signIn: actions.signIn,
};

const mapStateToProps = (state) => ({
  api: state.api
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm); 
