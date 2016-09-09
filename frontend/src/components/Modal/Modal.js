import React from 'react'
import classes from './Modal.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.displayClass = this.props.modals[this.props.id] ? classes.shown : classes.hidden;
  }

  componentWillUpdate(nextProps, nextState) {
    this.displayClass = nextProps.modals[nextProps.id] ? classes.shown : classes.hidden;
  }

  render() {
    return(
      <div>
        <div className={`modal-backdrop in ${this.displayClass}`}></div>

        <div className={`modal ${this.displayClass}`}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={ (e) => { this.props.toggleModal(this.props.id) } }>
                  <span>&times;</span>
                </button>
                <h4 className="modal-title">{this.props.title}</h4>
              </div>
              <div className="modal-body">
                { this.props.children }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
