// import React, {useState, useEffect} from 'react'
// import {Navbar, Nav, Badge, Container, Button} from 'react-bootstrap'
// import classes from './header.module.scss'
// import {
// //   ConfirmePhoneModal,
//   CountriesListModal,
//   //   ConfirmeCodeModal,
//   //   ShippingAddresModal,
//   //   ShopClosedModal,
//   //   MainMenuModal,
//   ConfirmationModal
// } from '../index'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
// import {getGeolocation} from '../../store/geolocation/actions'
// import PropTypes from 'prop-types'
// // import ConfirmePhoneModal from '../confirm-phone-modal'
// import ShopClosedModal from '../shop-closed-modal'
// import MainMenuModal from '../main-menu-modal'
//
// const Header = ({getGeolocation, position}) => {
//   const [country, setCountry] = useState('Ереван');
//   const [showModal, setShowModal] = useState(false);
//
//   const handlerShowModal = status => {
//     return () => {
//       setShowModal(status)
//     }
//   }
//
//   useEffect(() => {
//     getGeolocation()
//   }, [])
//
//   return (
//     <Navbar className={`position-sticky ${classes.menu}`} expand="lg" collapseOnSelect>
//       <Container className="d-flex px-0">
//         <Navbar.Brand href="#home" className={`p-0 order-0 ${classes.menu__logo}`}>
//           <picture>
//             <source srcSet="./images/logos/UBirdLogoFooter-xs.png" media="(max-width: 1050px)"
//               type="image/png">
//             </source>
//             <img className="img-fluid" src='./images/logos/UBird-logo.png' alt="UBird"/>
//           </picture>
//         </Navbar.Brand>
//         <Nav className="d-flex align-items-center flex-row order-1 order-lg-2">
//           <Button
//             className={`text-decoration-none  rounded-circle border-0 position-relative p-0 shadow-none ${classes.menu__item} ${classes.basket}`}>
//             <Badge
//               className={`rounded-circle position-absolute text-white d-flex align-items-center justify-content-center ${classes.menu__item__badge}`}>1</Badge>
//             <img src='./images/icons/basket.svg' alt="" height='20'/>
//           </Button>
//           <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav"/>
//         </Nav>
//         <Navbar.Collapse id="responsive-navbar-nav" className="order-2 order-lg-1">
//           <Nav className="mr-auto">
//             <Button variant="link"
//               className={`text-decoration-none p-0 ${classes.menu__item}`}>
//               <img className='d-none d-lg-inline' src='./images/icons/menu.png' alt=""/>
//               <span className={classes.menu__item__text}> Каталог доставки</span>
//             </Button>
//           </Nav>
//           <Nav className="ml-auto">
//             <Button variant="link"
//               className={`text-decoration-none p-0 ${classes.menu__item} ${classes.address}`}>
//               <i className="icon-location-outline d-none d-lg-inline"/>
//               <span className={classes.menu__item__text}>Укажите ваш адрес доставки</span>
//             </Button>
//             {/* <Nav.Link href="tel:+374 (93) 654-321" className={`text-decoration-none p-0 d-flex align-items-center ${classes.menu__item} ${classes.tel}`}>+374 (93) 654-321</Nav.Link>*/}
//             <Button
//               variant="link"
//               className={`text-truncate  p-0 ${classes.menu__item} ${classes.city}`}
//               onClick={handlerShowModal(true)}
//             >
//                             Город: {country}
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//         <ConfirmationModal country={country} onChange={setShowModal} />
//         <CountriesListModal
//           show={showModal}
//           position={position}
//           country={country}
//           onChange={setCountry}
//           onShow={setShowModal}
//         />
//       </Container>
//       <p className={`mb-0 position-absolute ${classes.language}`}>Ru</p>
//       {/* <ConfirmePhoneModal/>*/}
//       <ShopClosedModal/>
//       <MainMenuModal/>
//     </Navbar>
//   )
// }
//
// Header.propTypes = {
//   getGeolocation: PropTypes.func,
//   position: PropTypes.string
// }
//
// const mapStateToProps = state => {
//   return {
//     position: state.geolocation.position
//   }
// };
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//       {getGeolocation},
//       dispatch
//   )
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
import React, {Component} from 'react'
import {Navbar, Nav, Badge, Container, Button} from 'react-bootstrap'
import classes from './header.module.scss'
import {
  // ConfirmePhoneModal,
  // eslint-disable-next-line no-unused-vars
  CountriesListModal,
  // eslint-disable-next-line no-unused-vars
  ConfirmeCodeModal,
  // ShippingAddresModal,
  // ShopClosedModal,
  MainMenuModal
} from '../index'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('this.state.katalog', this.state.show)
    return (
      <Navbar className={`position-sticky ${classes.menu}`} expand="lg" collapseOnSelect>
        <Container className="d-flex px-0">
          <Navbar.Brand href="#home" className={`p-0 order-0 ${classes.menu__logo}`}>
            <picture>
              <source srcSet="./images/logos/UBirdLogoFooter-xs.png" media="(max-width: 1050px)" type="image/png">
              </source>
              <img className="img-fluid" src='./images/logos/UBird-logo.png' alt="UBird"/>
            </picture>
          </Navbar.Brand>
          <Nav className="d-flex align-items-center flex-row order-1 order-lg-2">
            <Button
              className={`text-decoration-none  rounded-circle border-0 position-relative p-0 shadow-none ${classes.menu__item} ${classes.basket}`}>
              <Badge
                className={`rounded-circle position-absolute text-white d-flex align-items-center justify-content-center ${classes.menu__item__badge}`}>1</Badge>
              <img src='./images/icons/basket.svg' alt="" height='20'/>
            </Button>
            <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav"/>
          </Nav>
          <Navbar.Collapse id="responsive-navbar-nav" className="order-2 order-lg-1">
            <Nav className="mr-auto">
              <Button onClick={this.handleClose} variant="link" className={`text-decoration-none p-0 ${classes.menu__item}`}>
                <img className='d-none d-lg-inline' src='./images/icons/menu.png' alt=""/>
                <span className={classes.menu__item__text}> Каталог доставки</span>
              </Button>
            </Nav>
            <Nav className="ml-auto">
              <Button variant="link" className={`text-decoration-none p-0 ${classes.menu__item} ${classes.address}`}>
                <i className="icon-location-outline d-none d-lg-inline"/>
                <span className={classes.menu__item__text}>Укажите ваш адрес доставки</span>
              </Button>
              {/* <Nav.Link href="tel:+374 (93) 654-321" className={`text-decoration-none p-0 d-flex align-items-center ${classes.menu__item} ${classes.tel}`}>+374 (93) 654-321</Nav.Link>*/}
              <Button variant="link" className={`text-truncate  p-0 ${classes.menu__item} ${classes.city}`}>
                Город: Ереван
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <p className={`mb-0 position-absolute ${classes.language}`}>Ru</p>
        {/* <ConfirmationModal/>*/}
        {/* <CountriesListModal/>*/}
        {/* <ConfirmePhoneModal/>*/}
        {/* <ShippingAddresModal/>*/}
        {/* <ShopClosedModal/>*/}
        {this.state.show ?
          <MainMenuModal/> : ''}
      </Navbar>
    )
  }
}

export default Header
