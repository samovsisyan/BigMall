import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import classes from './confirmation-modal.module.scss'
function ConfirmationModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} className={classes.confirmation}>
            <Modal.Header className="p-0 border-0 justify-content-center">
                <Modal.Title className={classes.confirmation__title}>Ваш город - Ереван?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <Button  onClick={handleClose} className={`shadow-none border-0 ${classes.confirmation__success}`}>
                    Да
                </Button>
                <Button className={`shadow-none border-0 ${classes.confirmation__ignore}`} onClick={handleClose}>
                    Нет
                </Button></Modal.Body>
            <Modal.Footer className={`border-0 p-0 text-center ${classes.confirmation__desc}`}>
                От города зависит актуальность ассортимента доставки
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmationModal;