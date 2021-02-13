import React, {Component} from 'react'
import {Container, Form} from 'react-bootstrap'
import CheckoutOrderMani from '../../checkout-order-main/checkout-order-main'
import classes from './checkout-order.module.scss'

class CheckoutOrder extends Component {
  render() {
    return (
      <Container fluid className={classes.checkoutOrder}>
        <Container className="p-0">
          <h2 className={classes.checkoutOrder__title}>Оформление заказа</h2>
          <Form className="d-flex flex-wrap align-items-start">
            <CheckoutOrderMani/>
          </Form>
        </Container>
      </Container>
    )
  }
}

export default CheckoutOrder
