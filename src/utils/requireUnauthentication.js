import React from 'react';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router'

const requireUnauthentication = (Component) => {
  class UnauthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuthentication(this.props.isAuthenticated)
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuthentication(nextProps.isAuthenticated)
    }

    checkAuthentication(isAuthenticated) {
      if (isAuthenticated) {
        let redirectTo = this.props.location.query.next || '/';
        this.props.router.push(redirectTo);
      }
    }

    render() {
      if (this.props.isAuthenticated === true) return null;

      return(
        <Component {...this.props} />
      );
    }
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.session.access_token !== null
  });

  let connectedComponent = connect(mapStateToProps)(UnauthenticatedComponent);
  return withRouter(connectedComponent);
}

export default requireUnauthentication;
