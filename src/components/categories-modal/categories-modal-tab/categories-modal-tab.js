import React, {useState} from 'react';
import {Tab, Nav} from 'react-bootstrap';
import CategoriesModalItem from '../categories-modal-item/categories-modal-item';
import { Scrollbars } from 'react-custom-scrollbars';
import  classes from './categories-modal-tab.module.scss'

export default function CategoriesModalTab() {
    return (

        <Tab.Container id="left-tabs-example" className={`${classes.menuTab}`} defaultActiveKey="all1">
            <section className="mx-0 d-flex flex-wrap flex-sm-nowrap">
                <Nav variant="link"  className={`flex-row flex-sm-column p-0 position-relative ${classes.menuTab__nav}`}>
                    <Scrollbars  className={classes.scroll} style={{ width: '100%', height: '100%' }}>
                        <Nav.Item>
                            <Nav.Link eventKey="all1"
                                      className={`p-0 d-flex align-items-center ${classes.menuTab__nav__item}`}>
                                <figure
                                    className={`p-0 mb-0 d-flex align-items-center justify-content-center ${classes.menuTab__nav__item__image}`}>
                                    <img src="./images/categories/Ellipse151.png" alt=""/>
                                </figure>
                                Все</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="shop2"
                                      className={`p-0 d-flex align-items-center ${classes.menuTab__nav__item}`}>
                                <figure
                                    className={`p-0 mb-0 d-flex align-items-center justify-content-center ${classes.menuTab__nav__item__image}`}>
                                    <img
                                        src="./images/categories/Ellipse152.png" alt=""/>
                                </figure>
                                Магазины</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="institution3"
                                      className={`p-0 d-flex align-items-center ${classes.menuTab__nav__item}`}>
                                <figure
                                    className={`p-0 mb-0 d-flex align-items-center justify-content-center ${classes.menuTab__nav__item__image}`}>
                                    <img src="./images/categories/Ellipse153.png" alt=""/>
                                </figure>
                                Заведения</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="institution3"
                                      className={`p-0 d-flex align-items-center ${classes.menuTab__nav__item}`}>
                                <figure
                                    className={`p-0 mb-0 d-flex align-items-center justify-content-center ${classes.menuTab__nav__item__image}`}>
                                    <img src="./images/categories/Ellipse153.png" alt=""/>
                                </figure>
                                Заведения</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="institution3"
                                      className={`p-0 d-flex align-items-center ${classes.menuTab__nav__item}`}>
                                <figure
                                    className={`p-0 mb-0 d-flex align-items-center justify-content-center ${classes.menuTab__nav__item__image}`}>
                                    <img src="./images/categories/Ellipse153.png" alt=""/>
                                </figure>
                                Заведения</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="institution3"
                                      className={`p-0 d-flex align-items-center ${classes.menuTab__nav__item}`}>
                                <figure
                                    className={`p-0 mb-0 d-flex align-items-center justify-content-center ${classes.menuTab__nav__item__image}`}>
                                    <img src="./images/categories/Ellipse153.png" alt=""/>
                                </figure>
                                Заведения</Nav.Link>
                        </Nav.Item>
                    </Scrollbars>
                </Nav>
                <section className="flex-grow-1">
                    <Tab.Content className="w-100">
                        <Tab.Pane className="d-flex flex-wrap w-100" eventKey="all1">
                            <CategoriesModalItem/>
                        </Tab.Pane>
                    </Tab.Content>
                </section>
            </section>
        </Tab.Container>
    )
}