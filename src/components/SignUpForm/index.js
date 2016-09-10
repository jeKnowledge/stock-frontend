import { connect } from 'react-redux'
import actions from 'redux/actions/session'
import SignUpForm from './SignUpForm'

const mapDispatchToProps = {
  signUp: actions.signUp,
};

const mapStateToProps = (state) => ({
  api: state.api
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

