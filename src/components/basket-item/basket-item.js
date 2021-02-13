import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap'
import classes from './basket-item.module.scss'

export default function BasketItem({number, select}) {

    return (
        <section className={`d-flex bg-white align-items-center ${classes.basketItem}`}>
            <figure
                className={`d-flex align-items-center justify-content-center flex-shrink-0 ${classes.basketItem__img}`}>
                <img className="img-fluid" src="./images/item.png" alt=""/>
            </figure>
            <div className={`flex-shrink-0 ${classes.basketItem__about}`}>
                <h4 className={`m-0 text-break ${classes.basketItem__about__title}`}>Овёс "Образ Жизни Алтая"
                    голозёрный</h4>
                <p className={`m-0 ${classes.basketItem__about__weight}`}>500г</p>
            </div>

            {/* if item selected shoe this block*/}

            {/*<div className={`d-flex align-items-center flex-shrink-0 ${classes.basketItem__countContainer}`}>*/}
            {/*<Button type="button"*/}
            {/*className={`bg-transparent shadow-none rounded-circle flex-shrink-0 ${classes.basketItem__minus}`}>*/}
            {/*<svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*<path d="M2 2H12" stroke="#222C54" strokeWidth="2.2" strokeLinecap="round"/>*/}
            {/*</svg>*/}
            {/*</Button>*/}
            {/*<Form.Group className="m-0">*/}
            {/*<Form.Control type="text"*/}
            {/*className={`rounded-circle border-0 m-0 text-center shadow-none flex-shrink-0 d-flex align-items-center justify-content-center  ${classes.basketItem__number}`}*/}
            {/*value={number}/>*/}
            {/*</Form.Group>*/}
            {/*<Button type="button"*/}
            {/*className={`shadow-none rounded-circle flex-shrink-0 border-0 ${classes.basketItem__plus}`}>*/}
            {/*<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*<path d="M2 7H12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>*/}
            {/*<path d="M7 2L7 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>*/}
            {/*</svg>*/}
            {/*</Button>*/}
            {/*</div>*/}

            {/*TODO else shoe this block*/}
            <div className={`d-flex align-items-center flex-shrink-0 ${classes.basketItem__countContainer}`}>
                <p className={`rounded-circle border-0 m-0 text-center shadow-none flex-shrink-0 d-flex align-items-center justify-content-center  ${classes.basketItem__number}`}>
                    {number}
                </p>
            </div>
            <p className={`m-0 flex-shrink-0  ${classes.basketItem__price}`}>48 600 AMD</p>

            {/* TODO if item selected shoe close button*/}
            {/*<Button type="button" variant="link" className={`p-0 ${classes.basketItem__close}`}>*/}
                {/*<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*<path d="M12 2L2.00017 11.9998" stroke="#A5A8B9" strokeWidth="2.2" strokeLinecap="round"/>*/}
                    {/*<path d="M12 12L2.00017 2.00024" stroke="#A5A8B9" strokeWidth="2.2" strokeLinecap="round"/>*/}
                {/*</svg>*/}
            {/*</Button>*/}
        </section>
    )
}