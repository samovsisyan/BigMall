import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import GoogleMapReact from 'google-map-react'
import {Title} from '../index'
import classes from './about-main.module.scss'

class AboutMain extends Component {
  render() {
    const defaultProps = {
      center: {
        lat: 40.177200,
        lng: 344.503490
      },
      zoom: 11
    }

    return (
      <div>
        <section className={classes.aboutMain}>
          <Title align="left" title="Контакты"/>
          <p className={classes.aboutMain__item}>
            Телефон службы поддержки клиентов:
            <a href="tel:+374 (93) 654-321" className={`text-decoration-none ${classes.aboutMain__tel}`}>
              +374 (93) 654-321</a> (Прием звонков
            и оформление заявок происходит круглосуточно.)
          </p>
          <p>
            Вы также можете связаться с нами через
            <Button type="button" variant="link" className={`text-decoration-none ${classes.aboutMain__link}`}>
              форму обратной</Button>
            связи.
          </p>
          <h5 className={classes.aboutMain__title}>
            Почта:
          </h5>
          <ul className="list-unstyled">
            <li className={classes.aboutMain__item}>По Общим Вопросам: <a href="mailto:operators@ubird.am" className={`text-decoration-none ${classes.aboutMain__link}`}>operators@ubird.am</a>
            </li>
            <li className={classes.aboutMain__item}>Корпоративным Клиентам: <a href="mailto:operators@ubird.am" className={`text-decoration-none ${classes.aboutMain__link}`}>operators@ubird.am</a>
            </li>
            <li>Отдел Контента: <a href="mailto:operators@ubird.am" className={`text-decoration-none ${classes.aboutMain__link}`}>operators@ubird.am</a>
            </li>
          </ul>
          <h5 className={classes.aboutMain__title}>Адрес:</h5>
          <address className={classes.aboutMain__item}>Сасна Црер 3-167, Ереван, Армени</address>
          <div className={`overflow-hidden ${classes.map}`}>
            <GoogleMapReact
              bootstrapURLKeys={{key: 'AIzaSyC-dFHYjTqEVLndbN2gdvXsx09jfJHmNc8'}}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
            >
            </GoogleMapReact>


          </div>
        </section>
        {/* <ContactModal/>*/}{/* <ItemInfoModal/>*/}
      </div>
    )
  }
}

export default AboutMain
