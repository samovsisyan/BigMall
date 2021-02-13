import React from 'react';
import {Breadcrumb} from 'react-bootstrap';

import classes from './custom-breadcrump.module.scss';

export default function CustomBreadcrump() {
    return (
        <Breadcrumb className={`${classes.customBreadcrump}`}>
            <Breadcrumb.Item href="#">Главная</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Проращивание
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Зерновые</Breadcrumb.Item>
        </Breadcrumb>
    )
}