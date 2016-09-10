import React from 'react'
import { Link } from 'react-router'
import classes from './SignInForm.scss'

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signIn(this.state);
    this.setState({ email: '', password: '' });
  }

  handleChange(e) {
    let name = e.target.getAttribute('name');
    let newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
  }

  renderError() {
    let apiState = this.props.api['signIn'] || {};
    if (apiState.message === null || apiState.message === undefined) return '';
    return(
      <p className="bg-danger">
        { apiState.message }
      </p>
    )
  }

  render() {
    return(
      <div>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <h1>Sign In Form</h1>

          { this.renderError() }

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
              onChange={ (e) => this.handleChange(e) }
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={ (e) => this.handleChange(e) }
            />
          </div>

          <input
            className="btn btn-success"
            type="submit"
            value="Submit"
          />
        </form>

        <Link to='/sign_up'>Sign Up</Link>
      </div>
    )
  }
}

export default SignInForm; 
