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
    this.setState({ email: '', password: '' });
  }

  handleChange(e) {
    let name = e.target.getAttribute('name');
    let newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
  }

  renderError() {
    if (this.props.session.fetchingError === null) return '';
    return(
      <p className="bg-danger">
        { this.props.session.fetchingError }
      </p>
    )
  }

  render() {
    return(
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <h1>Login Form</h1>

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
    )
  }
}

export default LoginForm 
