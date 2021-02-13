import React from 'react';
import {Card} from 'react-bootstrap';

import classes from './main-menu-item.module.scss';

export default function MainMenuItem() {
    return (
        <>
        <div className="col-6 col-md-3">
            <Card.Link href="#" className={`ml-0 border-0 d-flex flex-column justify-content-center align-items-center ${classes.item}`}>
                <div  className={`flex-grow-1 ${classes.item__top}`}>
                    <Card.Img variant="center" className={`w-100 h-100 ${classes.item__top__img}`} src="./images/carouselImages/Rectangle244.png"/>
                </div>
                <Card.Body className="p-0 flex-grow-0">
                    <Card.Text className={`text-center ${classes.item__text}`}>
                        07:00 - 20:30
                    </Card.Text>
                </Card.Body>
            </Card.Link>
        </div>
        <div className="col-6 col-md-3">
        <Card.Link href="#" className={`ml-0 border-0 d-flex flex-column justify-content-center align-items-center  ${classes.item}`}>
            <div  className={`flex-grow-1 ${classes.item__top}`}>
                <Card.Img variant="center" className={`w-100 h-100 ${classes.item__top__img}`} src="./images/carouselImages/Rectangle244-1.png"/>
            </div>
            <Card.Body className="p-0 flex-grow-0">
                <Card.Text className={`text-center ${classes.item__text}`}>
                    07:00 - 20:30
                </Card.Text>
            </Card.Body>
        </Card.Link>
        </div>
        <div className="col-6 col-md-3">
        <Card.Link href="#" className={`ml-0  border-0 d-flex flex-column justify-content-center align-items-center  ${classes.item}`}>
            <div  className={`flex-grow-1 ${classes.item__top}`}>
                <Card.Img variant="center" className={`w-100 h-100 ${classes.item__top__img}`} src="./images/carouselImages/Rectangle244-5.png"/>
            </div>
            <Card.Body className="p-0 flex-grow-0">
                <Card.Text className={`text-center ${classes.item__text}`}>
                    07:00 - 20:30
                </Card.Text>
            </Card.Body>
        </Card.Link>
        </div>
        <div className="col-6 col-md-3">
        <Card.Link href="#" className={`ml-0  border-0 d-flex flex-column justify-content-center align-items-center  ${classes.item}`}>
            <div  className={`flex-grow-1 ${classes.item__top}`}>
                <Card.Img variant="center" className={`w-100 h-100 ${classes.item__top__img}`} src="./images/carouselImages/Rectangle244-4.png"/>
            </div>
            <Card.Body className="p-0 flex-grow-0">
                <Card.Text className={`text-center ${classes.item__text}`}>
                    07:00 - 20:30
                </Card.Text>
            </Card.Body>
        </Card.Link>
        </div>
        </>
    )
}