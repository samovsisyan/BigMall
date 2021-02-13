import React, {Component} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import classes from './contact-modal.module.scss'
import PropsTypes from 'prop-types'

class ContactModal extends Component {
  render() {
    const {handleClose} = this.props
    return (
      <Modal show={false} className={classes.contact}>
        <Modal.Header className="p-0 border-0 justify-content-center align-items-center" closeButton>
          <Modal.Title className={classes.contact__title}>Обратная связь</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" className="shadow-none" placeholder="Тема обращения" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" className="shadow-none" placeholder="Имя"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="email" className="shadow-none" placeholder="E-mail" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control placeholder="Ваше сообщение" className="shadow-none" as="textarea" rows="3" />
            </Form.Group>
            <Button onClick={handleClose} className={`shadow-none border-0 w-100 mt-0 ${classes.contact__success}`}>
                          Отправить
            </Button>
            <div className="d-flex">
              <Form.Group controlId="formBasicCheckbox" className={`position-relative overflow-hidden flex-shrink-0 ${classes.contact__check}`}>
                <input type="checkbox" className="position-absolute" checked={true} />
                <Form.Label className={`position-absolute d-flex align-items-center  justify-content-center m-0 ${classes.contact__check__icon}`}>
                  <img src="./images/icons/check.png" alt=""/>
                </Form.Label>
              </Form.Group>
              <p className={`border-0 m-0 p-0 ${classes.contact__desc}`}>
                              Соглашаюсь с <a href="" className={classes.contact__desc__link}>политикой конфиденциальности</a></p>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

ContactModal.propTypes = {
  handleClose: PropsTypes.func
}

export default ContactModal
