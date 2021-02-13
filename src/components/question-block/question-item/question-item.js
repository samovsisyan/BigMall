import React, {Component} from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap'
import classes from './question-item.module.scss'
import PropsTypes from 'prop-types'

class QuestionItem extends Component {
  render() {
    const {title} = this.props
    return (
      <div>
        <Dropdown>
          <DropdownButton id="dropdown-basic-button" title={title} variant="link"
            className={classes.question}>
            <Dropdown.Item disabled>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eaque iure labore molestiae
                          necessitatibus nesciunt obcaecati odio pariatur quod! Assumenda delectus earum illum impedit
                          incidunt
                          itaque laborum perferendis quae ratione.
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>

      </div>
    )
  }
}

QuestionItem.propTypes = {
  title: PropsTypes.string
}

export default QuestionItem
