import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import LogoutLink from 'containers/LogoutLink'

export const Header = () => (
  <nav className="navbar navbar-light bg-faded">
    <div className="container">
      <a className="navbar-brand" href="#">Stock</a>

      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item active">
          <IndexLink to='/' className="nav-link">
            Home
          </IndexLink>
        </li>
        <li className="nav-item active">
          <Link to='/sign_in' className="nav-link">
            Sign In
          </Link>
        </li>
        <li className="nav-item active">
          <LogoutLink className="nav-link">
            Logout
          </LogoutLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
