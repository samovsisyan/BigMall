import React from 'react';
import {ListGroup} from 'react-bootstrap';
import classes from './about-aside.module.scss';

export default function AboutAside() {
    return (
        <>
        <ListGroup className={`w-100 overflow-hidden bg-white ${classes.asideMenu}`}>
            <ListGroup.Item className={`bborder-right-0 border-left-0 border-top-0 ${classes.asideMenu__title}`}>Информация</ListGroup.Item>
            <ListGroup.Item className={`border-0 text-truncate  position-relative ${classes.asideMenu__item}`} action
                            href="#link1">
                Как мы работаем
            </ListGroup.Item>
            <ListGroup.Item className={`border-0 text-truncate position-relative ${classes.asideMenu__item}`} action
                            href="#link2">
                Доставка и оплата
            </ListGroup.Item>
            <ListGroup.Item className={`border-0 text-truncate  position-relative ${classes.asideMenu__item}`} action
                            href="#link3">
                Помощь
            </ListGroup.Item>
        </ListGroup>

        <ListGroup className={`w-100 overflow-hidden bg-white ${classes.asideMenu}`}>
            <ListGroup.Item className={`bborder-right-0 border-left-0 border-top-0 ${classes.asideMenu__title}`}>Наш
                сервис</ListGroup.Item>
            <ListGroup.Item className={`border-0  text-truncate  position-relative ${classes.asideMenu__item}`} action
                            href="#link4">
                О компании
            </ListGroup.Item>
            <ListGroup.Item
                defaultActiveKey="#link5"
                className={`border-0  text-truncate  position-relative ${classes.asideMenu__item}`} action
                href="#link5">
                Контакты
            </ListGroup.Item>
            <ListGroup.Item className={`border-0  text-truncate position-relative ${classes.asideMenu__item}`} action
                            href="#link6">
                Юр. лицам
            </ListGroup.Item>
            <ListGroup.Item className={`border-0  text-truncate position-relative ${classes.asideMenu__item}`} action
                            href="#link7">
                Документы
            </ListGroup.Item>
        </ListGroup>
        </>
    )
}