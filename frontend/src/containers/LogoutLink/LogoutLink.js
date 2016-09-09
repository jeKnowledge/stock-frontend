import React from 'react'
import classes from './LogoutLink.scss'

class LogoutLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <a 
        href="#"
        className={ this.props.className }
        onClick={ this.props.logout }>
        { this.props.children }
      </a>
    )
  }
}

export default LogoutLink; 
