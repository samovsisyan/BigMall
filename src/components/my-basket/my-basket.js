import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import classes from './my-basket.module.scss'
import {BasketItem, NoResult, BigOrder} from '../index';

export default function MyBasket() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return (
        <>
        <Modal show={show} onHide={handleClose} className={classes.basket}>
            <Modal.Header className={`m-0 border-0 d-flex align-items-center ${classes.basket__header}`} closeButton>
                <Modal.Title className={`m-0 ${classes.basket__header__title}`}>Моя корзина</Modal.Title>
                <Button type="button" variant="btn" className={`shadow-none ${classes.basket__header__delete}`}>
                    Очистить</Button>
            </Modal.Header>
            <Modal.Body className="overflow-auto p-0">
                {/*no item in the basket block*/}
                {/*<NoResult/>*/}
                {/*no item in the basket block */}
                <section>
                    <h5 className={classes.basket__title}>Сыроедов</h5>
                    <div className={`overflow-hidden d-flex flex-column align-items-end ${classes.basket__body}`}>
                        <BasketItem number='3' select={false}/>
                        <BasketItem number='4' select={true}/>
                        <BasketItem number='5' select={true}/>
                    </div>
                </section>
            </Modal.Body>

            {/*TODO add active class if chacked the item*/}
            <Modal.Footer className={`border-0 text-center ${classes.basket__footer} ${classes.active}`}>
                <div className={`w-100 ${classes.basket__footer__position}`}>
                    <p className="m-0">Позиций добавленно: 3 (4.5 кг)</p>
                    <p className={classes.basket__footer__position__shipping}>Доставка:
                        <span className={classes.basket__footer__position__shipping__item}>1 700 AMD</span></p>
                </div>
                <Button
                        className={`shadow-none w-100 m-0 border-0 d-flex align-items-center ${classes.basket__success}`}>
                    Оформить заказ
                    <span className={`text-reset ${classes.basket__success__price}`}>147 500 AMD</span>
                </Button>
            </Modal.Footer>
        </Modal>
        <BigOrder/>
        </>
    )
}