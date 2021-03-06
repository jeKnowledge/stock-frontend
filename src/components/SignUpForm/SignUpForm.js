import React from 'react'
import { Link } from 'react-router'
import classes from './SignUpForm.scss'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', slack_handler: '', password: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signUp(this.state);
    this.setState({ name: '', email: '', slack_handler: '', password: '' });
  }

  handleChange(e) {
    let name = e.target.getAttribute('name');
    let newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
  }

  renderError() {
    let apiState = this.props.api['signUp'] || {};
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
          <h1>Sign Up Form</h1>

          { this.renderError() }

          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={ (e) => this.handleChange(e) }
            />
          </div>

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
            <label>Slack Handler</label>
            <input
              className="form-control"
              type="text"
              name="slack_handler"
              value={this.state.slack_handler}
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

        <Link to='/sign_in'>Sign In</Link>
      </div>
    )
  }
}

export default SignUpForm; 
