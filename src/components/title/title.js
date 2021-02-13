import React, {Component} from 'react'
import classes from './title.module.scss'
import PropsTypes from 'prop-types';

class Title extends Component {
  render() {
    const {title, align} = this.props
    return (
      <h3 className={`text-${align} ${classes.title}`}>{title}</h3>
    )
  }
}
export default Title

Title.propTypes = {
  title: PropsTypes.string,
  align: PropsTypes.string
}