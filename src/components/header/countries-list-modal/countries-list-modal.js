<<<<<<< HEAD
// import React, {useEffect} from 'react'
// import {Modal, Button} from 'react-bootstrap'
// import classes from './countries-list-modal.module.scss'
// import PropsTypes from 'prop-types'
//
//
// const CountriesListModal = ({show, country, position, onChange, onShow}) => {
//   const handleClose = () => onShow(true);
//
//
//   const handlerFade = () => {
//     const addressForm = document.querySelector('#addressForm');
//     if (addressForm) {
//       addressForm.style.position = 'relative';
//       addressForm.style.zIndex = 9999;
//       addressForm[0].style.zIndex = 9999;
//
//       const hideFade = () => {
//         handleClose();
//         addressForm.style.zIndex = 9;
//         addressForm[0].style.zIndex = 9;
//         addressForm.removeEventListener('click', hideFade);
//         setTimeout(() => {
//           addressForm[0].focus()
//         }, 1000)
//       };
//
//       addressForm.addEventListener('click', hideFade);
//     }
//   }
//
//   const handlerChange = value => {
//     return () => {
//       onChange(value);
//       handlerFade(true);
//     }
//   }
//
//   const countries = ['Ереван', 'Гюмри', 'Ванадзор', 'Абовян', 'Вагаршапат'];
//
//   useEffect(() => {
//     if (countries.includes(position)) {
//       onChange(position)
//     }
//   }, [position])
//
//   return (
//     <Modal show={show} onHide={handleClose} className={classes.countries}>
//       <Modal.Header className="p-0 border-0 justify-content-center">
//         <Modal.Title className={classes.countries__title}>Выберите город</Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="p-0">
//         <ul className="list-unstyled text-center m-0">
//           {countries.map((el, index) => (
//             <li key={ index } >
//               <Button onClick={handlerChange(el)} variant="link"
//                 className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item} ${el === country && classes.active}`}>
//                 {el}
//               </Button>
//             </li>
//           ))}
//         </ul>
//       </Modal.Body>
//     </Modal>
//   )
// }
//
// CountriesListModal.propTypes = {
//   show: PropsTypes.bool,
//   country: PropsTypes.string,
//   onChange: PropsTypes.func,
//   onShow: PropsTypes.func,
//   position: PropsTypes.string
// }
//
// export default CountriesListModal;
import React, {Component} from 'react'
=======
import React, {Component} from 'react';
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
import {Modal, Button} from 'react-bootstrap'
import classes from './countries-list-modal.module.scss'
// import countries from '../../../countries'

<<<<<<< HEAD
class CountriesListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleClose = this.handleClose.bind(this)
  }
  handleClose() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const countries = ['Ереван', 'Гюмри', 'Ванадзор', 'Абовян', 'Вагаршапат'];
    const show = this.state.show
    // eslint-disable-next-line no-console
    console.log('this.state.show', this.state.show)
    return (
      <Modal show={show} onHide={this.handleClose} className={classes.countries}>
        <Modal.Header onClick={this.handleClose} className="p-0 border-0 justify-content-center">
          <Modal.Title className={classes.countries__title}>Выберите город</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <ul className="list-unstyled text-center m-0">
            {countries.map((item, index) => (
              <li key={ index } >
                <Button onClick={this.handleClose} variant="link"
                  className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item} ${item == countries && classes.active}`}>
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    )
  }
=======

class CountriesListModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            setShow: true
        }
    }


    handleClose = () => {
        this.setState({
            setShow: !this.state.setShow
        })
    }


    render() {
        const show = this.state.show;
        const setShow = this.state.setShow
        return (
            <div>
                <Modal show={show} onHide={this.handleClose} className={classes.countries}>
                                 <Modal.Header className="p-0 border-0 justify-content-center">
                                     <Modal.Title className={classes.countries__title}>Выберите город</Modal.Title>
                                 </Modal.Header>
                                 <Modal.Body className="p-0">
                                     <ul className="list-unstyled text-center m-0">
                                         <li>
                                             <Button onClick={this.handleClose} variant="link"
                                                className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item} ${classes.active}`}>
                                            Ереван
                                        </Button>
                                    </li>
                                    <li>
                                        <Button onClick={this.handleClose} variant="link"
                                                className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item}`}>
                                            Гюмри
                                        </Button>
                                    </li>
                                    <li>
                                        <Button onClick={this.handleClose} variant="link"
                                                className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item}`}>
                                            Ванадзор
                                        </Button>
                                    </li>
                                    <li>
                                        <Button onClick={this.handleClose} variant="link"
                                                className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item}`}>
                                            Абовян
                                        </Button>
                                    </li>
                                    <li>
                                        <Button onClick={this.handleClose} variant="link"
                                                className={`text-decoration-none text-truncate p-0 w-100 overflow-hidden ${classes.countries__item}`}>
                                            Вагаршапат
                                        </Button>
                                    </li>
                                </ul>
                            </Modal.Body>
                        </Modal>
            </div>
        );
    }
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
}

export default CountriesListModal;