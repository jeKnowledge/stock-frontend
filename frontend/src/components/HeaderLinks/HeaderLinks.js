import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './HeaderLinks.scss'

class HeaderLinks extends React.Component {
  constructor(props) {
    super(props)
    this.isAuthenticated = props.session.accessToken !== null;
  }

  componentWillUpdate(nextProps, nextState) {
    this.isAuthenticated = nextProps.session.accessToken !== null;
  }

  renderSignInLink() {
    if (this.isAuthenticated) {
      return null;
    }

    return(
      <li className="nav-item active">
        <Link to='/sign_in' className="nav-link">
          Sign In
        </Link>
      </li>
    )
  }

  renderLogoutLink() {
    if (!this.isAuthenticated) {
      return null;
    }

    return(
      <li className="nav-item active">
        <a 
          href="#"
          className="nav-link"
          onClick={ this.props.logout }>
          Logout
        </a>
      </li>
    )
  }

  renderAddItemLink() {
    if (!this.isAuthenticated) {
      return null;
    }

    return(
      <li className="nav-item active">
        <a 
          href="#"
          className="nav-link"
          onClick={ (e) => { this.props.toggleModal('item-new') } }>
          Add Item
        </a>
      </li>
    )
  }

  render() {
    return(
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item active">
          <IndexLink to='/items' className="nav-link">
            Items
          </IndexLink>
        </li>
        { this.renderAddItemLink() }
        { this.renderSignInLink() }
        { this.renderLogoutLink() }
      </ul>
    )
  }
}

export default HeaderLinks;
