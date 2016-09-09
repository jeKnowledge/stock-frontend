import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import HeaderLinks from 'containers/HeaderLinks'

export const Header = () => (
  <nav className="navbar navbar-light bg-faded">
    <div className="container">
      <a className="navbar-brand" href="#">Stock</a>

      <HeaderLinks />
    </div>
  </nav>
)

export default Header;
