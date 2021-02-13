import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import Select from 'react-select'
import classes from './checkout-order-main.module.scss'
import CheckouOrderAside from '../checkout-order-aside/checkout-order-aside'

class CheckoutOrderMani extends Component {
  constructor(props) {
    super(props)
    this.state = {
      online_payment: false,
      customer_phone_number: '',
      delivery_address: '',
      porch: '',
      intercom: '',
      flat: '',
      floor: '',
      what_to_do_if_the_product_is_out_of_stock: '',
      optional: '',
      card_number: '',
      card_months: '',
      card_year: '',
      card_cvv: '',
      card_name: '',
    }
    this.openOnlinePayment = this.openOnlinePayment.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  openOnlinePayment() {
    this.setState({
      online_payment: !this.state.online_payment,
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    const filter = [
      {
        value: 'Позвоните мне. Если не удалось дозвониться - убрать товар.',
        label: 'Позвоните мне. Если не удалось дозвониться - убрать товар.',
        isFixed: false
      },
      {
        value: 'Позвоните мне. Если не удалось дозвониться - убрать товар.',
        label: 'Позвоните мне. Если не удалось дозвониться - убрать товар.',
        isFixed: false
      },
    ]
    return (
      <div>
        <section onSubmit={this.handleSubmit} className={`bg-white  flex-grow-1 ${classes.checkoutOrder__main}`}>
          <Form.Label>Номер Телефона Клиента</Form.Label>
          <div id='customer_phone_number' className="position-relative">
            <Button type="button" className={`position-absolute text-decoration-none ${classes.checkoutOrder__main__resetTel}`} variant="link">Изменить</Button>
            <PhoneInput
              placeholder="номер телефона"
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
              }}
              value=''
              country={'am'}
              enableAreaCodes={true}
              onlyCountries={['am', 'ru']}
              onChange={(e) => {
                this.setState({
                  customer_phone_number: e
                })
              }}
              // onChange={this.handleChange}
            />
          </div>
          <Form.Group ControlId='delivery_address'>
            <Form.Label>Адрес доставки</Form.Label>
            <Form.Control name='delivery_address' onChange={this.handleChange} type="text" className="shadow-none shipping-address" placeholder="Укажите адрес доставки..."/>
          </Form.Group>
          <div className={`d-flex flex-wrap ${classes.addres}`}>
            <Form.Group className={`mb-0 ${classes.addres__item}`}>
              <Form.Control name='porch' onChange={this.handleChange} type="text" className="shadow-none mb-0" placeholder="Подъезд"/>
            </Form.Group>
            <Form.Group className={`mb-0 ${classes.addres__item}`}>
              <Form.Control name='intercom' onChange={this.handleChange} type="text" className="shadow-none mb-0" placeholder="Домофон"/>
            </Form.Group>
            <Form.Group className={`mb-0 ${classes.addres__item}`}>
              <Form.Control name='flat' onChange={this.handleChange} type="text" className="shadow-none mb-0" placeholder="Квартира"/>
            </Form.Group>
            <Form.Group className={`mb-0 ${classes.addres__item}`}>
              <Form.Control name='floor' onChange={this.handleChange} type="text" className="shadow-none mb-0" placeholder="Этаж"/>
            </Form.Group>
          </div>
          <Form.Label>Что делать, если товара нет в наличии?</Form.Label>
          <Select
            id='what_to_do_if_the_product_is_out_of_stock'
            options={filter}
            placeholder="Позвоните мне. Если не удалось дозвониться - убрать товар."
            classNamePrefix='custom-select'
            // onChange={this.handleChange}
            onChange={(e) => {
              this.setState({
                what_to_do_if_the_product_is_out_of_stock: e
              })
            }}
          />
          <Form.Group controlId="optional exampleForm.ControlTextarea1">
            <Form.Label>Дополительно</Form.Label>
            <Form.Control name='optional' onChange={this.handleChange} placeholder="Комментарий к заказу" className="shadow-none mb-0" as="textarea" rows="3"/>
          </Form.Group>
          <div className={`d-flex flex-wrap align-items-center justify-content-between ${classes.checkCard}`}>
            <Form.Group className={`position-relative overflow-hidden mb-0 ${classes.checkCard__item}`}>
              <input onClick={this.openOnlinePayment} type="radio" className={`position-absolute ${classes.checkCard__item__radio}`} name="checkCard"/>
              <Form.Label
                className={`d-flex align-items-center justify-content-center w-100 h-100 mb-0 ${classes.checkCard__item__label}`}>
                Онлайн оплата</Form.Label>
            </Form.Group>
            <Form.Group className={`position-relative overflow-hidden mb-0 ${classes.checkCard__item}`}>
              <input type="radio" className={`position-absolute ${classes.checkCard__item__radio}`} name="checkCard"/>
              <Form.Label
                className={`d-flex align-items-center justify-content-center w-100 h-100 mb-0 ${classes.checkCard__item__label}`}>
                Картой курьеру</Form.Label>
            </Form.Group>
            <Form.Group className={`position-relative overflow-hidden mb-0 ${classes.checkCard__item}`}>
              <input type="radio" className={`position-absolute ${classes.checkCard__item__radio}`} name="checkCard"/>
              <Form.Label
                className={`d-flex align-items-center justify-content-center w-100 h-100 mb-0 ${classes.checkCard__item__label}`}>
                Наличными</Form.Label>
            </Form.Group>
          </div>
          <div>
            <div className={`d-flex ${classes.desc}`}>
              <svg className="flex-shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 9.45312V13.0895" stroke="#222C54" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M9 5.36328V6.27237" stroke="#222C54" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="9" cy="9" r="8" stroke="#222C54" strokeWidth="2"/>
              </svg>
              <p> После оформления заказа мы спишем и вернем один рубль для проверки карты. Полная сумма
                будет
                списана после сборки заказа.</p>
            </div>
            {this.state.online_payment ?
              <div>
                <Form.Group>
                  <Form.Control name='card_number' onChange={this.handleChange} type="text" className="shadow-none mb-0" placeholder="Номер карты"/>
                </Form.Group>
                <div className={`d-flex flex-wrap ${classes.cartDate}`}>
                  <Form.Group className={`mb-0 ${classes.cartDate__item}`}>
                    <Form.Control name='card_months' onChange={this.handleChange} type="text" className="shadow-none mb-0" placeholder="ММ"/>
                  </Form.Group>
                  <Form.Group className={`mb-0 ${classes.cartDate__item}`}>
                    <Form.Control name='card_year' onChange={this.handleChange} type="text" className="shadow-none mb-0" placeholder="ГГГГ"/>
                  </Form.Group>
                  <Form.Group className={`mb-0 ${classes.cartDate__item}`}>
                    <Form.Control name='card_cvv' onChange={this.handleChange} type="text" className="shadow-none mb-0" placeholder="CVV"/>
                  </Form.Group>
                </div>
                <Form.Group className="mb-0">
                  <Form.Control name='card_name' onChange={this.handleChange} type="text" className="shadow-none mb-0" placeholder="Имя латиницей (IVAN IVANOV)"/>
                </Form.Group>
              </div>: ''}
          </div>
        </section>
        <CheckouOrderAside checkoutState={this.state}/>

      </div>
    )
  }
}


export default CheckoutOrderMani;

