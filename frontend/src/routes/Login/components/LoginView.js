import { connect } from 'react-redux'
import actions from 'redux/actions/session'

import LoginForm from 'components/LoginForm'

const mapDispatchToProps = {
  login: actions.login
};

const mapStateToProps = (state) => ({
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
