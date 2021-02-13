import React, {Component} from 'react'
import {Container} from 'react-bootstrap'
import classes from './our-apps.module.scss'
class OurApps extends Component {
  render() {
    return (
      <Container fluid className={classes.apps__container}>
        <Container className={`position-relative ${classes.apps}`}>
          <img className={`position-absolute d-none d-lg-block ${classes.apps__iphone}`} src="/images/homePage/iphone.png" alt=""/>
          <section className={`text-white ml-auto ${classes.apps__info}`}>
            <h2 className={`text-white m-0 ${classes.apps__info__title}`}>Скачайте наше приложение</h2>
            <p className={`text-white ${classes.apps__info__desc}`}>Экономить время и силы удобнее, когда всё
              под
              рукой!</p>
            <div className={` ${classes.apps__info__btn}`}>
              <a className={`d-inline-block ${classes.apps__info__btn__item}`} href="">
                <img className="img-fluid" src="./images/icons/googlePlay.png" alt=""/>
              </a>
              <a className={`d-inline-block ${classes.apps__info__btn__item}`} href="">
                <img className="img-fluid" src="./images/icons/appStore.png" alt=""/>
              </a>
            </div>

          </section>
        </Container>
      </Container>
    )
  }
}

export default OurApps
