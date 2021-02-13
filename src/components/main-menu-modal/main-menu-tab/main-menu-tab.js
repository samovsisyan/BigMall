import React, {useState} from 'react';
import {Tab,Nav} from 'react-bootstrap';
import MainMenuItem from '../main-menu-item/main-menu-item';
import classes from './main-menu-tab.module.scss'

export default function MainMenuTab() {
    return (
        <Tab.Container id="left-tabs-example" className={classes.menuTab} defaultActiveKey="all">
            <section className="mx-0 d-flex flex-wrap flex-sm-nowrap">
                    <Nav variant="link" className={`flex-row flex-sm-column px-0 ${classes.menuTab__nav}`}>
                        <Nav.Item>
                            <Nav.Link eventKey="all" className={`p-0 ${classes.menuTab__nav__item}`}>Все</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="shop" className={`p-0 ${classes.menuTab__nav__item}`}>Магазины</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="institution" className={`p-0 ${classes.menuTab__nav__item}`}>Заведения</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="pharmacy" className={`p-0 ${classes.menuTab__nav__item}`}>Аптеки</Nav.Link>
                        </Nav.Item>
                    </Nav>
                <section className="flex-grow-1">
                    <Tab.Content className="w-100">
                        <Tab.Pane className="d-flex flex-wrap w-100" eventKey="all">
                            <MainMenuItem/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="shop">
                            <MainMenuItem/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="institution">
                            <MainMenuItem/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="pharmacy">
                            <MainMenuItem/>
                        </Tab.Pane>
                    </Tab.Content>
                </section>
            </section>
        </Tab.Container>
    )
}