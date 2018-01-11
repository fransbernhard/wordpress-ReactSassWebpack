import DataStore from '../flux/stores/DataStore.js'
import React, { Component } from 'react';

class Modal extends Component {
    render() {
      // if is open is not true, return nothing
      if (this.props.isOpen === false)
        return null

      // Modal background styling
      const backdropStyle = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.6)'
      }

      // Modal styling
      const modalStyle = {
        position: 'fixed',
        top: '40%',
        left: '50%',
        display: 'flex',
        flexFlow: 'column',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999'
      }

      // this.props.children - a special prop that is passed to components automatically. All content inside Modal component in Post.js

      return (
        <div className={this.props.modalContainer}>
          <div className={this.props.modalDiv} style={modalStyle}>
            {this.props.children}
          </div>
          {!this.props.noBackdrop &&
            <div className={this.props.backdropClassName} style={backdropStyle}
            onClick={e => this.close(e)}/>}
        </div>
      )
    }

    close(e) {
      e.preventDefault()
      if (this.props.onClose) { //if props onClose is true, call func onClose
        this.props.onClose()
      }
    }
  }

  export default Modal;
