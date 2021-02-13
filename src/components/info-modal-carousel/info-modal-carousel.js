import React, { useState } from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import ItemsCarousel from 'react-items-carousel';

import classes from './info-modal-carousel.module.scss'
export default function InfoModalCarousel() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    return (
        <div className={`px-0 w-100 ${classes.carouselContainer}`}>
            <h3 className={`${classes.carouselContainer__title}`}>Вы не давно смотрели</h3>
            <ItemsCarousel className="w-100"
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={4}
                gutter={20}
                leftChevron={<button  className="rounded-circle border-0"><i className="icon-left-open"></i></button>}
                rightChevron={<button  className="rounded-circle border-0"><i className="icon-right-open"></i></button>}
                outsideChevron
            >

                    <Card
                        className={`ml-0 border-0 d-flex flex-column justify-content-center align-items-center p-0 bg-white ${classes.product__item}`}>
                        <div className={`position-relative ${classes.product__item__top}`}>
                            <Card.Img variant="center" className={`w-100 h-100 ${classes.product__item__top__img}`}
                                      src="./images/item.png"/>
                        </div>
                        <Card.Body className={`flex-grow-1 w-100 d-flex flex-column ${classes.product__item__info}`}>
                            <Card.Text className={`flex-grow-1 ${classes.product__item__info__weight}`}>500г</Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="align-self-end">
                                    <h5 className={`m-0 align-self-end ${classes.product__item__info__price}`}>16 200 AMD</h5>
                                    <Card.Text className={`mb-0 ${classes.product__item__info__oldprice}`}>18 200 AMD</Card.Text>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                <Card
                    className={`ml-0 border-0 d-flex flex-column justify-content-center align-items-center p-0 bg-white ${classes.product__item}`}>
                    <div className={`position-relative ${classes.product__item__top}`}>
                        <Card.Img variant="center" className={`w-100 h-100 ${classes.product__item__top__img}`}
                                  src="./images/item.png"/>
                    </div>
                    <Card.Body className={`flex-grow-1 w-100 d-flex flex-column ${classes.product__item__info}`}>
                        <Card.Text className={`flex-grow-1 ${classes.product__item__info__weight}`}>500г</Card.Text>
                        <div className="d-flex justify-content-between">
                            <div className="align-self-end">
                                <h5 className={`m-0 align-self-end ${classes.product__item__info__price}`}>16 200 AMD</h5>
                                <Card.Text className={`mb-0 ${classes.product__item__info__oldprice}`}>18 200 AMD</Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card
                    className={`ml-0 border-0 d-flex flex-column justify-content-center align-items-center p-0 bg-white ${classes.product__item}`}>
                    <div className={`position-relative ${classes.product__item__top}`}>
                        <Card.Img variant="center" className={`w-100 h-100 ${classes.product__item__top__img}`}
                                  src="./images/item.png"/>
                    </div>
                    <Card.Body className={`flex-grow-1 w-100 d-flex flex-column ${classes.product__item__info}`}>
                        <Card.Text className={`flex-grow-1 ${classes.product__item__info__weight}`}>500г</Card.Text>
                        <div className="d-flex justify-content-between">
                            <div className="align-self-end">
                                <h5 className={`m-0 align-self-end ${classes.product__item__info__price}`}>16 200 AMD</h5>
                                <Card.Text className={`mb-0 ${classes.product__item__info__oldprice}`}>18 200 AMD</Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card
                    className={`ml-0 border-0 d-flex flex-column justify-content-center align-items-center p-0 bg-white ${classes.product__item}`}>
                    <div className={`position-relative ${classes.product__item__top}`}>
                        <Card.Img variant="center" className={`w-100 h-100 ${classes.product__item__top__img}`}
                                  src="./images/item.png"/>
                    </div>
                    <Card.Body className={`flex-grow-1 w-100 d-flex flex-column ${classes.product__item__info}`}>
                        <Card.Text className={`flex-grow-1 ${classes.product__item__info__weight}`}>500г</Card.Text>
                        <div className="d-flex justify-content-between">
                            <div className="align-self-end">
                                <h5 className={`m-0 align-self-end ${classes.product__item__info__price}`}>16 200 AMD</h5>
                                <Card.Text className={`mb-0 ${classes.product__item__info__oldprice}`}>18 200 AMD</Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card
                    className={`ml-0 border-0 d-flex flex-column justify-content-center align-items-center p-0 bg-white ${classes.product__item}`}>
                    <div className={`position-relative ${classes.product__item__top}`}>
                        <Card.Img variant="center" className={`w-100 h-100 ${classes.product__item__top__img}`}
                                  src="./images/item.png"/>
                    </div>
                    <Card.Body className={`flex-grow-1 w-100 d-flex flex-column ${classes.product__item__info}`}>
                        <Card.Text className={`flex-grow-1 ${classes.product__item__info__weight}`}>500г</Card.Text>
                        <div className="d-flex justify-content-between">
                            <div className="align-self-end">
                                <h5 className={`m-0 align-self-end ${classes.product__item__info__price}`}>16 200 AMD</h5>
                                <Card.Text className={`mb-0 ${classes.product__item__info__oldprice}`}>18 200 AMD</Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card
                    className={`ml-0 border-0 d-flex flex-column justify-content-center align-items-center p-0 bg-white ${classes.product__item}`}>
                    <div className={`position-relative ${classes.product__item__top}`}>
                        <Card.Img variant="center" className={`w-100 h-100 ${classes.product__item__top__img}`}
                                  src="./images/item.png"/>
                    </div>
                    <Card.Body className={`flex-grow-1 w-100 d-flex flex-column ${classes.product__item__info}`}>
                        <Card.Text className={`flex-grow-1 ${classes.product__item__info__weight}`}>500г</Card.Text>
                        <div className="d-flex justify-content-between">
                            <div className="align-self-end">
                                <h5 className={`m-0 align-self-end ${classes.product__item__info__price}`}>16 200 AMD</h5>
                                <Card.Text className={`mb-0 ${classes.product__item__info__oldprice}`}>18 200 AMD</Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </ItemsCarousel>
        </div>
    );
}