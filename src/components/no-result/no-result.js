import React, {Component} from 'react'
import classes from './no-result.module.scss'

class NoResult extends Component {
  render() {
    return (
      <section className="m-0 d-flex align-items-center justify-content-center h-100">
        <figure className={`m-0 ${classes.noResult}`}>
          <img className={classes.noResult__image} src="./images/icons/iconbasket.svg" alt=""/>
          <figcaption className={`text-center ${classes.noResult__image}`}>
            Вы пока ничего не добавили
          </figcaption>
        </figure>
      </section>
    )
  }
}

export default NoResult