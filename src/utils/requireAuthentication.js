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
        let redirectAfterSignIn = location.pathname;
        this.props.router.push(`/sign_in?next=${redirectAfterSignIn}`);
      }
    }

    render() {
      if (this.props.isAuthenticated === false) return null;

      return(
        <Component {...this.props} />
      );
    }
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.session.access_token !== null
  });

  let connectedComponent = connect(mapStateToProps)(AuthenticatedComponent);
  return withRouter(connectedComponent);
}

export default requireAuthentication;
