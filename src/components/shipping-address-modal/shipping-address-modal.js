import React, {Component} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import classes from './shipping-address-modal.module.scss'

class ShippingAddressModal extends Component {
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
      <Modal show={show} onHide={this.handleClose} className={classes.contact}>
        <Modal.Header className="p-0 border-0 justify-content-center align-items-center" closeButton>
          <Modal.Title className={classes.contact__title}>Куда доставить?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 text-center">
          <p className={`border-0 mx-0 p-0 text-center ${classes.contact__desc}`}>
            Введите адрес, что бы понять доставляем ли мы к вам
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" className="shadow-none" placeholder="Укажите адрес доставки..." />
            </Form.Group>
            <Button onClick={this.handleClose} className={`shadow-none border-0 w-100 m-0 ${classes.contact__success}`}>
              Отправить
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}
export default ShippingAddressModal
