import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import classes from './countries-list-modal.module.scss'
function CountriesListModal() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} className={classes.countries}>
            <Modal.Header className="p-0 border-0 justify-content-center">
                <Modal.Title className={classes.countries__title}>Выберите город</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <ul className="list-unstyled text-center m-0">
                    <li>
                        <Button onClick={handleClose} variant="link"
                                className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item} ${classes.active}`}>
                            Ереван
                        </Button>
                    </li>
                    <li>
                        <Button onClick={handleClose} variant="link"
                                className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item}`}>
                            Гюмри
                        </Button>
                    </li>
                    <li>
                        <Button onClick={handleClose} variant="link"
                                className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item}`}>
                            Ванадзор
                        </Button>
                    </li>
                    <li>
                        <Button onClick={handleClose} variant="link"
                                className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item}`}>
                            Абовян
                        </Button>
                    </li>
                    <li>
                        <Button onClick={handleClose} variant="link"
                                className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item}`}>
                            Вагаршапат
                        </Button>
                    </li>
                </ul>
            </Modal.Body>
        </Modal>
    )
}

export default CountriesListModal;