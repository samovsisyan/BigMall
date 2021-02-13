import React, {useState} from 'react';
import {Modal, Button,Form} from 'react-bootstrap';
import classes from './big-order.module.scss'

export default function BigOrder({}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} className={classes.bigOrder}>
            <Modal.Header className="p-0 border-0 justify-content-center align-items-center" closeButton>
                <Modal.Title className={classes.bigOrder__title}>Заказ слишком большой</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <p className={`border-0 text-center p-0 ${classes.bigOrder__desc}`}>
                    Проверьте, возможно вы привысили одно из ограничений: </p>
                <dl className={`text-center ${classes.bigOrder__list}`}>
                    <dt className={`${classes.bigOrder__list__title}`}>Вес доставки:</dt>
                    <dd className={`${classes.bigOrder__list__desc}`}>до 50 кг</dd>
                    <dt className={`${classes.bigOrder__list__title}`}>Общая стоимость:</dt>
                    <dd className={`${classes.bigOrder__list__desc}`}> до 150 000 ADM</dd>
                    <dt className={`${classes.bigOrder__list__title}`}>Количество:</dt>
                    <dd className={`${classes.bigOrder__list__desc}`}>до 30 разных позиций</dd>
                    <dt className={`${classes.bigOrder__list__title}`}>Одна позиция:</dt>
                    <dd className={`${classes.bigOrder__list__desc}`}>до 15 шт / 50кг</dd>
                </dl>
                <Button  onClick={handleClose} className={`shadow-none border-0 w-100 m-0 ${classes.bigOrder__success}`}>
                    Понятно
                </Button>

           </Modal.Body>
        </Modal>
    )
}