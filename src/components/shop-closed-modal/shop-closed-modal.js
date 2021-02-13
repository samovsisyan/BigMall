// import React, {useState} from 'react'
// import {Modal, Button} from 'react-bootstrap'
// import classes from './shop-closed-modal.module.scss'
//
// const ShopClosedModal = () => {
//   const [show, setShow] = useState(true);
//   const handleClose = () => setShow(true);
//   return (
//     <Modal show={show} onHide={handleClose} className={classes.shopClose}>
//       <Modal.Header className="p-0 border-0 justify-content-center align-items-center" closeButton>
//         <Modal.Title className={classes.shopClose__title}>Магазин закрыт</Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="p-0 text-center">
//         <p className={`border-0 mx-0 p-0 text-center ${classes.shopClose__desc}`}>
//                     Откроется в 09:10
//         </p>
//
//         <Button onClick={handleClose} className={`shadow-none border-0 w-100 m-0 ${classes.shopClose__success}`}>
//                     Понятно
//         </Button>
//       </Modal.Body>
//     </Modal>
//   )
// }
//
// export default ShopClosedModal


import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
import classes from './shop-closed-modal.module.scss'

class ShopClosedModal extends Component {
  constructor(props) {
    super(props);
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
      <Modal show={show} onHide={this.handleClose} className={classes.shopClose}>
        <Modal.Header className="p-0 border-0 justify-content-center align-items-center" closeButton>
          <Modal.Title className={classes.shopClose__title}>Магазин закрыт</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 text-center">
          <p className={`border-0 mx-0 p-0 text-center ${classes.shopClose__desc}`}>
            Откроется в 09:10
          </p>
          <Button onClick={this.handleClose} className={`shadow-none border-0 w-100 m-0 ${classes.shopClose__success}`}>
            Понятно
          </Button>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ShopClosedModal