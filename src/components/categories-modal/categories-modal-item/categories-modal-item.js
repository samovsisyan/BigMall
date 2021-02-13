import React, {Component} from 'react'
import {Tab, Nav} from 'react-bootstrap'
import classes from './categories-modal-item.module.scss'

class CategoriesModalItem extends Component {
  render() {
    return (
      <Tab.Container id="left-tabs-example" className={classes.menuTab} defaultActiveKey="all">
        <section className="mx-0 d-flex flex-wrap w-100">
          <Nav variant="link" className={`d-flex justify-content-center w-100 p-0 ${classes.menuTab__nav}`}>
            <Nav.Item>
              <Nav.Link eventKey="all" className={`p-0 ${classes.menuTab__nav__item}`}>
                              Все</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="shop" className={`p-0 ${classes.menuTab__nav__item}`}>

                              Магазины</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="institution" className={`p-0 ${classes.menuTab__nav__item}`}>Заведения</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pharmacy" className={`p-0 ${classes.menuTab__nav__item}`}>Аптеки</Nav.Link>
            </Nav.Item>
          </Nav>
          <section className="flex-grow-1">
            <Tab.Content className="w-100">
              <Tab.Pane className="d-flex flex-wrap w-100" eventKey="all">
              </Tab.Pane>
              <Tab.Pane eventKey="shop">
              </Tab.Pane>
              <Tab.Pane eventKey="institution">
              </Tab.Pane>
              <Tab.Pane eventKey="pharmacy">
              </Tab.Pane>
            </Tab.Content>
          </section>
        </section>
      </Tab.Container>
    )
  }
}

export default CategoriesModalItem
