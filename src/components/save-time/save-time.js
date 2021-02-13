import React, {Component} from 'react'
import {Container} from 'react-bootstrap'
import classes from './save-time.module.scss'
import {Title} from '../index'

class SaveTime extends Component {
  render() {
    return (
      <Container fluid className={`position-relative  ${classes.saveTime}`}>
        <Container>
          <Title align="center" title="Сохраним ваше время и энергию"/>
        </Container>
        <Container className={`d-flex flex-wrap justify-content-between ${classes.information}`}>
          <section className={`position-relative ${classes.information__item}`}>
            <figure
              className={`bg-white mx-auto my-0 position-relative rounded-circle d-flex align-items-center justify-content-center ${classes.information__item__img}`}>
              <img src="./images/homePage/infoClock.png" alt=""/>
            </figure>
            <p className={`mb-0 text-center ${classes.information__item__text}`}>Привизем заказ в любое
              удобное для вас
              время
            </p>
          </section>
          <section className={`d-none d-lg-flex align-items-center justify-content-center position-relative flex-grow-1 ${classes.information__item__empty}`}/>
          <section className={`position-relative ${classes.information__item}`}>
            <figure
              className={`bg-white mx-auto my-0 position-relative rounded-circle d-flex align-items-center justify-content-center ${classes.information__item__img}`}>
              <img src="./images/homePage/infoWorker.png" alt=""/>
            </figure>
            <p className={`mb-0 text-center ${classes.information__item__text}`}>
              Тяжелые сумки доставим
              прямо до вашей
              двери
            </p>
          </section>
          <section className={`d-none d-lg-flex align-items-center justify-content-center position-relative flex-grow-1 ${classes.information__item__empty}`}/>
          <section className={`position-relative ${classes.information__item}`}>
            <figure
              className={`bg-white mx-auto my-0 position-relative  rounded-circle d-flex align-items-center justify-content-center ${classes.information__item__img}`}>
              <img src="./images/homePage/infoBest.png" alt=""/>
            </figure>
            <p className={`mb-0 text-center ${classes.information__item__text}`}>
              Выбираем только лучшее
              из товаров как
              для себя
            </p>
          </section>
          <section className={`d-none d-lg-flex align-items-center justify-content-center position-relative flex-grow-1 ${classes.information__item__empty}`}/>
          <section className={`position-relative ${classes.information__item}`}>
            <figure
              className={`bg-white mx-auto my-0 position-relative  rounded-circle d-flex align-items-center justify-content-center ${classes.information__item__img}`}>
              <img src="./images/homePage/infoShipping.png" alt=""/>
            </figure>
            <p className={`mb-0 text-center ${classes.information__item__text}`}>
              Предоставляем услуги
              перевозки
              грузов
            </p>
          </section>
        </Container>
      </Container>
    )
  }
}

export default SaveTime
