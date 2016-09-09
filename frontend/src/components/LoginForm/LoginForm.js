import React from 'react'
import classes from './LoginForm.scss'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.props = props;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  handleChange(e) {
    let name = e.target.getAttribute('name');
    let newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <h1>Login Form</h1>

        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={ (e) => this.handleChange(e) }
        />

        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={ (e) => this.handleChange(e) }
        />

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default LoginForm 
