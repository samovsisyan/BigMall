import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import classes from './footer.module.scss'


class Footer extends Component {
  render() {
    return (
      <div>
        <Container fluid className={classes.footer}>
          <div className={`bg-white ${classes.footer__main}`}>
            <Container className="px-0">
              <Row>
                <Col xs={12} md={3} sm={6} className="order-0">
                  <a href="#home" className={`d-block ${classes.footer__main__logo}`}>
                    <img className="img-fluid" src='./images/logos/UBirdLogoFooter.png' alt="UBird"/>
                  </a>
                  <p className={classes.footer__main__desc}>Наш сервис самый лучший
                    и прекрасней всеx!</p>
                  <h3 className={`m-0 ${classes.footer__main__title}`}>
                    Мы в соц. сетях:
                  </h3>

                  <ul className={`d-flex list-unstyled mb-0 ${classes.social}`}>
                    <li className={`${classes.social__icon__vk} ${classes.social__icon}`}>
                      <a href="#" className="d-block h-100 text-decoration-none"/>
                    </li>
                    <li className={`${classes.social__icon__in} ${classes.social__icon}`}>
                      <a href="#" className="d-block h-100 text-decoration-none"/>
                    </li>
                    <li className={`${classes.social__icon__fb} ${classes.social__icon}`}>
                      <a href="#" className="d-block h-100 text-decoration-none"/>
                    </li>
                  </ul>
                </Col>
                <Col xs={12} md={6} className="text-center order-2 order-md-1 p-0">
                  <h3 className={classes.footer__main__title}>Наш сервис</h3>
                  <ul className={`list-unstyled ${classes.menu}`}>
                    <li className={`d-inline-block ${classes.menu__item}`}>
                      <a href="" className={`text-decoration-none ${classes.menu__item__link}`}>О компании</a>
                    </li>
                    <li className={`d-inline-block ${classes.menu__item}`}>
                      <a href="" className={`text-decoration-none ${classes.menu__item__link}`}>Контакты</a>
                    </li>
                    <li className={`d-inline-block ${classes.menu__item}`}>
                      <a href="" className={`text-decoration-none ${classes.menu__item__link}`}>Юр. лицам</a>
                    </li>
                    <li className={`d-inline-block ${classes.menu__item}`}>
                      <a href="" className={`text-decoration-none ${classes.menu__item__link}`}>Документы</a>
                    </li>
                  </ul>
                  <h3 className={classes.footer__main__title}>Помощь покупателю</h3>
                  <ul className={`list-unstyled ${classes.menu}`}>
                    <li className={`d-inline-block ${classes.menu__item}`}>
                      <a href="" className={`text-decoration-none ${classes.menu__item__link}`}>Как мы работаем</a>
                    </li>
                    <li className={`d-inline-block ${classes.menu__item}`}>
                      <a href="" className={`text-decoration-none ${classes.menu__item__link}`}>Зоны доставки</a>
                    </li>
                    <li className={`d-inline-block ${classes.menu__item}`}>
                      <a href="" className={`text-decoration-none ${classes.menu__item__link}`}>Частые вопросы</a>
                    </li>
                  </ul>
                </Col>
                <Col xs={12} md={3} sm={6} className={`text-md-right order-1 order-md-2 ${classes.contact}`}>
                  <a href="tel:+374 (93) 654-321" className={`d-block text-decoration-none ${classes.contact__tel}`}>+374 (93) 654-321</a>
                  <a href="" className={`d-block ${classes.contact__back}`}>Обратная связь</a>
                  <p className={classes.footer__main__desc}>Прием звонков и оформление заявок круглосуточно.</p>
                  <h3 className={classes.footer__main__title}>Скачайте наше приложение</h3>
                  <ul className={`list-unstyled ${classes.app}`}>
                    <li className={`d-inline-block ${classes.app__item}`}>
                      <a href="" className={`d-block ${classes.app__item__link}`}>
                        <img className="img-fluid" src="./images/socialIcons/googlePlay.png" alt=""/>
                      </a>
                    </li>
                    <li className={`d-inline-block ${classes.app__item}`}>
                      <a href="" className={`d-block ${classes.app__item__link}`}>
                        <img className="img-fluid" src="./images/socialIcons/appStore.png" alt=""/>
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
          <div className={classes.copywright}>
            <p className={`text-white text-center m-0 ${classes.copywright__text}`}>&copy; 2020. UBird. Все права
              защищены</p>
          </div>
        </Container>
      </div>
    )
  }
}

export default Footer