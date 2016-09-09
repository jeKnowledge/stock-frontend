import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <nav className="navbar navbar-light bg-faded">
    <div className="container">
      <a className="navbar-brand" href="#">Stock</a>

      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item active">
          <IndexLink to='/' className="nav-link" activeClassName={classes.activeRoute}>
            Home
          </IndexLink>
        </li>
        <li className="nav-item active">
          <Link to='/sign_in' className="nav-link" activeClassName={classes.activeRoute}>
            Sign In
          </Link>
        </li>
        <li className="nav-item active">
          <Link to='/sign_up' className="nav-link" activeClassName={classes.activeRoute}>
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
