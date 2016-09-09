import React from 'react'
import classes from './NewItemForm.scss'

class NewItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', photoUrl: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createItem(this.state);
    this.setState({ name: '', photoUrl: '' });
  }

  handleChange(e) {
    let name = e.target.getAttribute('name');
    let newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
  }

  renderError() {
    if (this.props.items.fetchingError === null) return '';
    return(
      <p className="bg-danger">
        { this.props.items.fetchingError }
      </p>
    )
  }

  render() {
    return(
        <form onSubmit={ (e) => this.handleSubmit(e) }>
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
            <label>Photo URL</label>
            <input
              className="form-control"
              type="url"
              name="photoUrl"
              value={this.state.photoUrl}
              onChange={ (e) => this.handleChange(e) }
            />
          </div>

          <input
            className="btn btn-success"
            type="submit"
            value="Create"
          />
        </form>
    )
  }
}

export default NewItemForm; 
