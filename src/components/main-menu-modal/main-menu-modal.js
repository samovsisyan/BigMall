import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import classes from './main-menu-modal.module.scss'
import MainMenuTab from './main-menu-tab/main-menu-tab'

export default function MainMenuModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} className={`container mx-auto p-0 ${classes.mainMenu}`}>
            <Modal.Header className="p-0 border-0 justify-content-center" closeButton>
            </Modal.Header>
            <Modal.Body className="p-0">
                <MainMenuTab/>
            </Modal.Body>
        </Modal>
    )
}