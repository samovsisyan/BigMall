import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import classes from './categories-modal.module.scss'
import CategoriesModalTab from './categories-modal-tab/categories-modal-tab'

export default function CategoriesModalItem() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} className={`container mx-auto overflow-hidden p-0 ${classes.mainMenu}`}>
            <Modal.Header className="p-0 border-0 justify-content-center" closeButton>
            </Modal.Header>
            <Modal.Body className="p-0">
                <CategoriesModalTab/>
            </Modal.Body>
        </Modal>
    )
}