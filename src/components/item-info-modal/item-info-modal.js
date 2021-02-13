import React, {useEffect, useState} from 'react';
import {Modal, Button, Form, Col, Row, Nav, Tab, ListGroup} from 'react-bootstrap';
import {InfoModalCarousel} from '../index'
import classes from './item-info-modal.module.scss'

export default function ItemInfoModal() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return (
        <Modal show={show} onHide={handleClose} className={classes.itemModal}>
            <Modal.Header className="p-0 border-0" closeButton>
            </Modal.Header>
            <Modal.Body className="p-0">
                <Row className="d-flex flex-wrap">
                    <Col sm={6}>
                        <figure
                            className={`d-flex align-items-center justify-content-center w-100 m-0 ${classes.itemModal__image}`}>
                            <img className="img-fluid w-100 h-100" src="./images/item.png" alt=""/>
                        </figure>
                    </Col>
                    <Col sm={6} className="d-flex flex-column">
                        <div className="flex-grow-1">
                            <h3 className={classes.itemModal__title}>
                                Овёс "Образ Жизни Алтая" голозёрный
                            </h3>
                            <p className={classes.itemModal__weight}>1 шт. 500г</p>
                        </div>
                        <div>
                            <p className={classes.itemModal__price}>16 200 AMD</p>
                            <p className={`m-0 ${classes.itemModal__oldPrice}`}>18 200 AMD</p>
                        </div>
                    </Col>
                </Row>
                <Row className={`align-items-center ${classes.saveInBascet}`}>
                    <Col sm={6} className="pl-0">
                        <div
                            className={`d-flex flex-wrap align-items-start justify-content-between ${classes.checkItem}`}>
                            <Form.Group className={`position-relative overflow-hidden mb-0 ${classes.checkItem__item}`}>
                                <input type="radio" className={`position-absolute ${classes.checkItem__item__radio}`}
                                       name="radio"/>
                                <Form.Label
                                    className={`d-flex align-items-center justify-content-center w-100 h-100 mb-0 ${classes.checkItem__item__label}`}>
                                    <img className="img-fluid w-100 h-100" src="./images/item.png" alt=""/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className={`position-relative overflow-hidden mb-0 ${classes.checkItem__item}`}>
                                <input type="radio" className={`position-absolute ${classes.checkItem__item__radio}`}
                                       name="radio"/> <Form.Label
                                className={`d-flex align-items-center justify-content-center w-100 h-100 mb-0 ${classes.checkItem__item__label}`}>
                                <img className="img-fluid w-100 h-100" src="./images/item.png" alt=""/>
                            </Form.Label>
                            </Form.Group>
                            <Form.Group className={`position-relative overflow-hidden mb-0 ${classes.checkItem__item}`}>
                                <input type="radio" className={`position-absolute ${classes.checkItem__item__radio}`}
                                       name="radio"/>
                                <Form.Label
                                    className={`d-flex align-items-center justify-content-center w-100 h-100 mb-0 ${classes.checkItem__item__label}`}>
                                    <img className="img-fluid w-100 h-100" src="./images/item.png" alt=""/>
                                </Form.Label>
                            </Form.Group>
                        </div>
                    </Col>
                    <Col sm={6}>
                        {/*<Button*/}
                            {/*className={`shadow-none border-0 w-100 mb-0 d-flex align-items-center justify-content-between ${classes.saveInBascet__success}`}>*/}
                            {/*Добавить*/}
                            {/*<span className={`text-white ${classes.checkoutOrder__sidebar__success__price}`}>*/}
                                    {/*<svg width="24" height="20" viewBox="0 0 24 20" fill="none"*/}
                                         {/*xmlns="http://www.w3.org/2000/svg">*/}
                                        {/*<path*/}
                                            {/*d="M19.9227 12.6042C20.3558 12.6042 20.7889 12.2917 20.8972 11.875L23.9289 3.54167C24.0372 3.22917 24.0372 2.8125 23.8206 2.5C23.6041 2.1875 23.2792 1.97917 22.8461 1.97917H6.49653L5.7386 0.625C5.52205 0.208333 5.08895 0 4.65585 0H1.19103C0.541377 0 0 0.520833 0 1.14583C0 1.77083 0.541377 2.29167 1.19103 2.29167H4.00619L4.65585 3.54167L7.47101 12.7083V12.8125L8.22894 15.1042H6.71308C6.49653 15.1042 6.27998 15.2083 6.06343 15.3125C4.98067 15.5208 4.11447 16.4583 4.11447 17.6042C4.11447 18.8542 5.19722 20 6.6048 20C8.01238 20 9.09514 18.9583 9.09514 17.6042C9.09514 17.5 9.09514 17.5 9.09514 17.3958H17.2158C17.2158 17.5 17.2158 17.5 17.2158 17.6042C17.2158 18.8542 18.2986 20 19.7061 20C21.1137 20 22.1965 18.9583 22.1965 17.6042C22.1965 16.4583 21.4385 15.625 20.2475 15.3125C20.031 15.2083 19.8144 15.1042 19.5979 15.1042H10.611L10.0696 13.4375L19.9227 12.6042Z"*/}
                                            {/*fill="white"/>*/}
                                        {/*</svg>*/}
                                {/*</span>*/}
                        {/*</Button>*/}
                        <div
                            className={`d-flex align-items-end mx-auto h-100 ${classes.checkItem__item__countContainer}`}>
                            <Button type="button"
                                    className={`d-flex align-items-center justify-content-center bg-transparent shadow-none rounded-circle flex-shrink-0 ${classes.checkItem__item__countContainer__minus}`}>
                                <svg width="14" height="4" viewBox="0 0 14 4" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2H12" stroke="#222C54" strokeWidth="2.2" strokeLinecap="round"/>
                                </svg>
                            </Button>
                            <Form.Group className="m-0">
                                <Form.Control type="text"
                                              className={`border-0 m-0 text-center shadow-none flex-shrink-0 d-flex align-items-center justify-content-center  ${classes.checkItem__item__countContainer__number}`}
                                              value='3'/>
                            </Form.Group>
                            <Button type="button"
                                    className={`d-flex align-items-center justify-content-center shadow-none rounded-circle flex-shrink-0 border-0 ${classes.checkItem__item__countContainer__plus}`}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 7H12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                                    <path d="M7 2L7 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                                </svg>
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Nav variant="link" className={`d-flex w-100 p-0 ${classes.menuTab__nav}`}>
                    <Nav.Item>
                        <Nav.Link eventKey="all" className={`p-0 ${classes.menuTab__nav__item}`}>
                            Описание</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="shop" className={`p-0 ${classes.menuTab__nav__item}`}>
                            Пищевая ценность
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="institution" className={`p-0 ${classes.menuTab__nav__item}`}>
                            Информация
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <section className="flex-grow-1">
                    <Tab.Content className="w-100">
                        <Tab.Pane className="d-flex flex-wrap w-100" eventKey="all">
                            <ListGroup className={`w-100 ${classes.tabList}`}>
                                <ListGroup.Item
                                    className={`d-flex align-items-center justify-content-between border-top-0 border-right-0 border-left-0 ${classes.tabList__item}`}>Калорийность
                                    <span className="text-reset">368 кКал</span></ListGroup.Item>
                                <ListGroup.Item
                                    className={`d-flex align-items-center justify-content-between border-top-0 border-right-0 border-left-0 ${classes.tabList__item}`}>Белки
                                    <span className="text-reset">17 г</span></ListGroup.Item>
                                <ListGroup.Item
                                    className={`d-flex align-items-center justify-content-between border-top-0 border-right-0 border-left-0 ${classes.tabList__item}`}>Углеводы
                                    <span className="text-reset">61.3 г</span></ListGroup.Item>
                                <ListGroup.Item
                                    className={`d-flex align-items-center justify-content-between border-top-0 border-right-0 border-left-0 ${classes.tabList__item}`}>Жиры
                                    <span className="text-reset">6.1 г</span></ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>
                        <Tab.Pane eventKey="shop">
                        </Tab.Pane>
                        <Tab.Pane eventKey="institution">
                        </Tab.Pane>
                    </Tab.Content>
                </section>
                <InfoModalCarousel/>
            </Modal.Body>
        </Modal>)
}