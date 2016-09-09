import React from 'react';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router'

const requireAuthentication = (Component) => {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuthentication(this.props.isAuthenticated);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuthentication(nextProps.isAuthenticated);
    }

    checkAuthentication(isAuthenticated) {
      if (!isAuthenticated) {
        let redirectAfterLogin = location.pathname;
        this.props.router.push(`/login?next=${redirectAfterLogin}`);
      }
    }

    render() {
      if (this.props.isAuthenticated === false) return null;

      return(
        <div>
          <Component {...this.props} />
        </div>
      );
    }
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.session.user.accessToken !== null
  });

  let connectedComponent = connect(mapStateToProps)(AuthenticatedComponent);
  return withRouter(connectedComponent);
}

export default requireAuthentication;
