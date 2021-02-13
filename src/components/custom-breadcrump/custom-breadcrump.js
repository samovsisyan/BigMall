import React, {Component} from 'react';
import {Breadcrumb} from 'react-bootstrap'
import classes from './custom-breadcrump.module.scss'



class CustomBreadcrump extends Component {
<<<<<<< HEAD
  render() {
    return (
      <Breadcrumb className={`${classes.customBreadcrump}`}>
        <Breadcrumb.Item href="#">Главная</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Проращивание
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Зерновые</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
=======
    render() {
        return (
            <Breadcrumb className={`${classes.customBreadcrump}`}>
                <Breadcrumb.Item href="#">Главная</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Проращивание
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Зерновые</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
}

export default CustomBreadcrump;
