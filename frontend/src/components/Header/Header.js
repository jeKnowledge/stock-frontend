import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import HeaderLinks from 'containers/HeaderLinks'

export const Header = () => (
  <nav className="navbar navbar-light bg-faded">
    <div className="container">
      <IndexLink to='/' className="navbar-brand">
        Stock
      </IndexLink>

      <HeaderLinks />
    </div>
  </nav>
)

export default Header;
