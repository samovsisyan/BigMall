<<<<<<< HEAD
import React, {Component} from 'react'
import {Modal} from 'react-bootstrap';
=======
// import React, { Component, useState } from 'react'
// import { Modal } from 'react-bootstrap'
// import classes from './categories-modal.module.scss'
// import CategoriesModalTab from './categories-modal-tab/categories-modal-tab'
//
// class CategoriesModal extends Component {
//   render() {
//     return (
//       <Modal show={true} className={`container mx-auto overflow-hidden p-0 ${classes.mainMenu}`}>
//         <Modal.Header className="p-0 border-0 justify-content-center" closeButton>
//         </Modal.Header>
//         <Modal.Body className="p-0">
//           <CategoriesModalTab/>
//         </Modal.Body>
//       </Modal>
//     )
//   }
// }
//
// export default CategoriesModal


import React, {Component} from 'react';
import {Modal} from 'react-bootstrap'
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
import classes from './categories-modal.module.scss'
import CategoriesModalTab from './categories-modal-tab/categories-modal-tab'


class CategoriesModal extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const show = this.state.show
    return (
      <Modal show={show} onHide={this.handleClose} className={`container mx-auto overflow-hidden p-0 ${classes.mainMenu}`}>
        <Modal.Header className="p-0 border-0 justify-content-center" closeButton>
        </Modal.Header>
        <Modal.Body className="p-0">
          <CategoriesModalTab/>
        </Modal.Body>
      </Modal>
    )
  }
}

export default CategoriesModal
=======
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    handleClose = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const show = this.state.show;
        return (
            <div>
                {show == true ?
                    <Modal show={true} onHide={this.handleClose} className={`container mx-auto overflow-hidden p-0 ${classes.mainMenu}`}>
                        <Modal.Header className="p-0 border-0 justify-content-center" closeButton>
                        </Modal.Header>
                        <Modal.Body className="p-0">
                            <CategoriesModalTab/>
                        </Modal.Body>
                    </Modal>
                    : <div></div>}
            </div>
        );
    }
}

export default CategoriesModal;
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
