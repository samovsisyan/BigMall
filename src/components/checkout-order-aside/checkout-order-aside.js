import React from 'react';
import {Button} from 'react-bootstrap';
import Select from 'react-select';
import classes from './checkout-order-aside.module.scss';

export default function CheckoutOrderAside() {
    const time = [
        {
            value: '07:00 - 8:00',
            label: '07:00 - 8:00',
            isFixed: false
        },
        {
            value: '09:00 - 10:00',
            label: '09:00 - 10:00',
            isFixed: false
        },
        {
            value: '11:00 - 12:00',
            label: '11:00 - 12:00',
            isFixed: false
        },
        {
            value: '13:00 - 14:00',
            label: '13:00 - 14:00',
            isFixed: false
        },
        {
            value: '15:00 - 16:00',
            label: '15:00 - 16:00',
            isFixed: false
        },
        {
            value: '17:00 - 18:00',
            label: '17:00 - 18:00',
            isFixed: false
        },       {
            value: '19:00 - 20:00',
            label: '19:00 - 20:00',
            isFixed: false
        },       {
            value: '21:00 - 22:00',
            label: '21:00 - 22:00',
            isFixed: false
        },       {
            value: '23:00 - 24:00',
            label: '23:00 - 24:00',
            isFixed: false
        },
    ];
    return (
        <>
        <aside className={`bg-white d-flex flex-column ${classes.checkoutOrder__sidebar}`}>
            <figure className={`mx-auto ${classes.checkoutOrder__sidebar__image}`}>
                <img className="img-fluid" src="./images/carouselImages/Rectangle244-7.png" alt=""/>
            </figure>
            <Select
                options={time}
                placeholder="Выберите время доставки"
                classNamePrefix='custom-select'
            />
            <div className={`d-flex align-items-center flex-column flex-grow-1 ${classes.checkoutOrder__info}`}>
                <div className={`text-center w-100 ${classes.checkoutOrder__info__block}`}>
                    <p className={`${classes.checkoutOrder__info__block__position}`}>Позиций добавленно: 3 (4.5 кг)</p>
                    <p className={`m-0 ${classes.checkoutOrder__info__block__bold}`}>145 800 AMD</p>
                </div>
                <p className="mb-0 flex-grow-1 d-flex align-items-end">Доставка: <span className={`${classes.checkoutOrder__info__block__bold}`}>1 700 AMD</span>
                </p>
            </div>
            <Button
                className={`shadow-none border-0 w-100 mb-0 d-flex align-items-center justify-content-between ${classes.checkoutOrder__sidebar__success}`}>
                Заказать
                <span className={`text-white ${classes.checkoutOrder__sidebar__success__price}`}>147 500 <span className="text-reset">AMD</span></span>
            </Button>
        </aside>
        </>
    )
}