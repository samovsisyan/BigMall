<<<<<<< HEAD
import React, {Component} from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import {ProductItem, CustomBreadcrump, ShopSearchBlock} from '../../index'
=======
import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import {ProductItem, CustomPagination, CustomBreadcrump, ShopSearchBlock} from '../../index'
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
import classes from './shop.module.scss'

class Shop extends Component {
  render() {
    return (
      <div>
        <Container fluid className={classes.shop}>
          <Container className="p-sm-0">
            <section className="d-flex justify-content-between align-items-baseline">
              <CustomBreadcrump/>
              <div className="text-right">
                <p className="m-0">
                  График работы: с 09:10 до 21:30
                </p>
                <Button variant="link" className={`p-0 ${classes.shop__infBtn}`}>Информация о магазине</Button>
              </div>
            </section>
            <ShopSearchBlock/>
            <Row>
              <section className={`w-100 d-flex flex-wrap ${classes.productItems}`}>
                <ProductItem/>
              </section>
            </Row>
          </Container>
        </Container>
      </div>
    )
  }
}

export default Shop;
