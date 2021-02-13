import React, {useState} from 'react';
import {Modal, Button,Form} from 'react-bootstrap';
import classes from './shipping-address-modal.module.scss'

export default function ShippingAddresModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} className={classes.contact}>
            <Modal.Header className="p-0 border-0 justify-content-center align-items-center" closeButton>
                {/*TODO if chacked address change title text  to 'Редактирование адреса'*/}
                <Modal.Title className={classes.contact__title}>Куда доставить?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0 text-center">

                {/*TODO if chacked address chide description*/}
                <p className={`border-0 mx-0 p-0 text-center ${classes.contact__desc}`}>
                    Введите адрес, что бы понять доставляем ли мы к вам
                </p>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" className="shadow-none" placeholder="Укажите адрес доставки..." />
                    </Form.Group>

                    <Button  onClick={handleClose} className={`shadow-none border-0 w-100 m-0 ${classes.contact__success}`}>
                        Отправить
                    </Button>
                </Form>
           </Modal.Body>
        </Modal>
    )
}