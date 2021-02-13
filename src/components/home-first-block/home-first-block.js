import React from 'react';
import {Container, Button,Form} from 'react-bootstrap';
import classes from './home-first-block.module.scss';

function HomeFirstBlock() {
    return (
        <Container fluid className={`position-relative p-0 ${classes.firsBlock}`}>
            <img className="w-100" src="./images/stabilBlock.png" alt=""/>
          <div className="w-100 h-100 position-absolute d-flex align-items-center">
              <Container className="px-0">
                  <section className="d-flex">
                      <section className={`text-center text-sm-left ${classes.firsBlock__shipping}`}>
                          <h1 className={`mb-0 ${classes.firsBlock__title}`}>Быстрая доставка <br/>
                              товаров</h1>
                          <p className={classes.firsBlock__desc}>Большой выбор на любой вкус! Работаем 24/7 </p>
                          <Form>
                              <Form.Group controlId="formGroupEmail" className={`position-relative bg-white ${classes.addressForm}`}>
                                  <Form.Control type="text" className={`shadow-none border-0 bg-transparent ${classes.addressForm__input}`} placeholder="Куда доставить? укажите адрес..." />
                                  <Button  className={`position-absolute text-white border-0 shadow-none ${classes.addressForm__btn}`}>Сохранить</Button>
                              </Form.Group>
                          </Form>
                      </section>
                  </section>
              </Container>
          </div>
        </Container>
    )
}
export default HomeFirstBlock