import { connect } from 'react-redux'
import requireAuthentication from '../../routes/requireAuthentication' 
import actions from 'redux/actions/session'

import LogoutLink from './LogoutLink'

const mapDispatchToProps = {
  logout: actions.logout,
};

const mapStateToProps = (state) => ({
  session: state.session
});

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(LogoutLink);

export default requireAuthentication(connectedComponent);
