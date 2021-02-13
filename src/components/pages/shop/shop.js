import React from 'react';
import {Container, Row, Form, Button} from 'react-bootstrap';
import {ProductItem, CustomPagination, CustomBreadcrump, ShopSearchBlock} from '../../index'
import classes from './shop.module.scss';
import Wrapper from "../../Wrapper/wrapper";

export default function Shop() {
    return (
            <Container fluid className={classes.shop}>
                <Container className="p-sm-0">
                    <section className="d-flex justify-content-between align-items-baseline">
                        <CustomBreadcrump/>
                        <div className="text-right">
                            <p className="m-0">
                                График работы: с 09:10 до 21:30
                            </p>
                            <Button variant="link" className={`p-0 ${classes.shop__infBtn}`}>Информация о
                                магазине</Button>
                        </div>
                    </section>
                    <ShopSearchBlock/>
                    <Row>
                        <section className={`w-100 d-flex flex-wrap ${classes.productItems}`}>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                        </section>
                        <CustomPagination/>
                    </Row>
                </Container>
            </Container>
    )
}
