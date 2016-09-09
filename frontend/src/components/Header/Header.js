import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
    {' · '}
    <Link to='/sign_in' activeClassName={classes.activeRoute}>
      Sign In
    </Link>
    {' · '}
    <Link to='/sign_up' activeClassName={classes.activeRoute}>
      Sign Up
    </Link>
  </div>
)

export default Header
