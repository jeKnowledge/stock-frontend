import React from 'react'
import { IndexLink, Link } from 'react-router'
import styles from './Header.scss'
import HeaderLinks from 'components/HeaderLinks'

export const Header = () => (
  <nav className={ `navbar navbar-light bg-faded ${styles.navBar}` }>
    <div className="container">
      <IndexLink to='/' className="navbar-brand">
        Stock
      </IndexLink>

      <HeaderLinks />
    </div>
  </nav>
)

export default Header;
