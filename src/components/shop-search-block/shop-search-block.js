import React, {useState} from 'react';
import {Container, Row, Form, Button, InputGroup, FormControl} from 'react-bootstrap';
import {CustomSelect} from '../index';
import classes from './shop-search-block.module.scss';
import CategoriesModalItem from '../categories-modal/categories-modal'
export default function ShopSearchBlock() {
    const [filter, setfilter] = useState('');

    const checkFilters = (e) => {
        setfilter(e.target.checked)
    };

    const filtersBlock = filter ? <div className={`d-flex flex-wrap w-100 ${classes.filtersBlock}`}>
        <CustomSelect/>
        <CustomSelect/>
        <CustomSelect/>
        <CustomSelect/>
        <Button type="button" variant="link" className={`text-decoration-none ml-auto ${classes.resetFilters}`}>
            Очистить все фильтры
        </Button>
    </div> : null;
    return (
        <>
        <Container>
            <Row>
                <div className={`bg-white overflow-hidden ${classes.categories}`}>
                    <figure
                        className={`d-flex align-items-center justify-content-center m-0 ${classes.categories__image}`}>
                        <img className="img-fluid" src="./images/carouselImages/Rectangle244-7.png" alt=""/>
                    </figure>
                    <Button type="button"
                            className={`w-100 border-0 shadow-none d-flex align-items-center justify-content-between  ${classes.categories__btn}`}>
                        Категории
                        <span
                            className={`rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center ${classes.categories__btn__icon}`}>
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.80005 1.93281L5.53338 5.13281L9.26672 1.93281" stroke="white" strokeWidth="2.2"
                  strokeLinecap="round"/>
        </svg>
            </span>
                    </Button>
                    <CategoriesModalItem/>
                </div>
                <div className="d-flex justify-content-end flex-column flex-grow-1">
                    <h3 className={classes.search__title}>Зерновые</h3>
                    <div className="d-flex flex-wrap">
                        <InputGroup className={`overflow-hidden bg-white border-none flex-grow-1 ${classes.search}`}>
                            <FormControl
                                placeholder="Поиск в магазине «Сыроедов» "
                                aria-label="Поиск в магазине «Сыроедов» "
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary"
                                        className={`rounded-circle border-0 p-0 shadow-none ${classes.search__btn}`}>
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="6" cy="6" r="4.85" stroke="white" strokeWidth="2.3"/>
                                        <path d="M10.5 8.5L15 11" stroke="white" strokeWidth="2.3"/>
                                    </svg>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Form.Group controlId="formBasicCheckbox"
                                    onChange={checkFilters}
                                    className={`d-flex position-relative align-items-center justify-content-between border-0 mb-0 ${classes.filterBtn}`}>
                            Фильтр
                            <input type="checkbox"
                                   className={`position-absolute w-100 h-100 p-0 ${classes.filterBtn__checkbox}`}/>
                            <Form.Label
                                className={`${classes.filterBtn__icon}`}>
                                <svg className="" width="22" height="18" viewBox="0 0 22 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 16L18 2" strokeWidth="2.2" strokeLinecap="round"/>
                                    <path d="M11 16L11 2" strokeWidth="2.2" strokeLinecap="round"/>
                                    <path d="M4 16L4 2" strokeWidth="2.2" strokeLinecap="round"/>
                                    <path d="M20 6L16 6" strokeWidth="2.2" strokeLinecap="round"/>
                                    <path d="M13 12L9 12" strokeWidth="2.2" strokeLinecap="round"/>
                                    <path d="M6 6L2 6" strokeWidth="2.2" strokeLinecap="round"/>
                                </svg>
                            </Form.Label>
                        </Form.Group>
                    </div>
                </div>
                {/*filters dropdown*/}
                {filtersBlock}
            </Row>
        </Container>
        </>
    )
}