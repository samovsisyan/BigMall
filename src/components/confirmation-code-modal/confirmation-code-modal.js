import React, {Component} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import classes from './confirmation-code-modal.module.scss'

class ConfirmeCodeModal extends Component {
  render() {
    return (
      <section className={`text-center  ${classes.confirmCode}`}>
        <Modal.Body className="p-0">
          <p className={`${classes.confirmCode__description}`}>Мы отправили код потверждения на номер</p>
          <p className={`${classes.confirmCode__tel}`}>+374 (93) 123-456</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" className="shadow-none" placeholder="Введите код из смс"/>
            </Form.Group>
            <Button disabled={true}
              className={`shadow-none border-0 w-100 mt-0 mx-auto ${classes.confirmCode__success}`}>
                          Далее
            </Button>
            <div className="d-flex flex-column align-items-center">
              <Button variant="link" className={`p-0 text-decoration-none ${classes.confirmCode__btn}`}>
                              Отправить еще раз
              </Button>
              <Button variant="link" className={`p-0 text-decoration-none ${classes.confirmCode__btn}`}>
                              Вернуться
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </section>
    )
  }
}

export default ConfirmeCodeModal
