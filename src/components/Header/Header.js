import React from 'react'
import { IndexLink, Link } from 'react-router'
import styles from './Header.scss'
import HeaderLinks from 'components/HeaderLinks'
import logo from './assets/logo.jpg'

export const Header = () => (
  <nav className={ `navbar navbar-light bg-faded ${styles.navBar}` }>
    <div className="container">
      <IndexLink to='/' className="navbar-brand">
        <img
          className={styles.logo}
          src={logo}
          alt="Logo" 
        />
      </IndexLink>

      <HeaderLinks />
    </div>
  </nav>
)

export default Header;
