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
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
