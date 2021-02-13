import React from 'react'
import './app.scss'
import {Route, Switch} from 'react-router-dom'
import 'react-phone-input-2/lib/style.css'
import Home from '../pages/home'
import Shop from '../pages/shop/shop'
import About from '../pages/about/about'


import AboutAside from '../about-aside/about-aside'
import CarouselContainer from '../carousel-container/carousel-container'
import CategoriesModalTab from '../categories-modal/categories-modal-tab'
import CustomPagination from '../custom-pagination/custom-pagination'
import CustomSelect from '../custom-select/custom-select'
import Footer from '../footer/footer'
import ConfirmationModal from '../header/confirmation-modal'
import CountriesListModal from '../header/countries-list-modal'
import HomeFirstBlock from '../home-first-block/home-first-block'
import HomeTab from '../home-tab/home-tab'
import InfoModalCarousel from '../info-modal-carousel/info-modal-carousel'
import ItemInfoModal from '../item-info-modal/item-info-modal'
import CarouselItem from '../carousel-item/carousel-item'
import MainMenuItem from '../main-menu-modal/main-menu-item/main-menu-item'
import MainMenuTab from '../main-menu-modal/main-menu-tab/main-menu-tab'
import MainMenuModal from '../main-menu-modal/main-menu-modal'
import MyBasket from '../my-basket/my-basket'
import NoResult from '../no-result/no-result'
import OurApps from '../our-apps/our-apps'
import CheckoutOrder from '../pages/checkout-order/checkout-order'
import ProductItem from '../product-item/product-item'
import QuestionBlock from '../question-block/question-block'
import SaveTime from '../save-time/save-time'
import ShippingAddresModal from '../shipping-address-modal/shipping-address-modal'
import ShopClosedModal from '../shop-closed-modal/shop-closed-modal'
import ShopSearchBlock from '../shop-search-block/shop-search-block'
import BasketItem from '../basket-item/basket-item'
import BigOrder from '../big-order/big-order'
import CategoriesModalItem from '../categories-modal/categories-modal-item/categories-modal-item'
import CheckoutOrderAside from '../checkout-order-aside/checkout-order-aside'
import CheckoutOrderMani from '../checkout-order-main/checkout-order-main'
import ConfirmeCodeModal from '../confirmation-code-modal/confirmation-code-modal'
import ContactModal from '../contact-modal/contact-modal'
import CustomBreadcrump from '../custom-breadcrump/custom-breadcrump'
import QuestionItem from '../question-block/question-item/question-item'
import Title from '../title/title'
import AboutMain from '../about-main/about-main'
import CategoriesModal from '../categories-modal/categories-modal'
import ConfirmePhoneModal from '../confirm-phone-modal/confirm-phone-modal'
=======
import CategoriesModalTab from '../categories-modal/categories-modal-tab'
import InfoModalCarousel from '../info-modal-carousel/info-modal-carousel'
import ItemInfoModal from '../item-info-modal/item-info-modal';
import MainMenuItem from '../main-menu-modal/main-menu-item/main-menu-item';
import MainMenuTab from '../main-menu-modal/main-menu-tab/main-menu-tab';
import MainMenuModal from '../main-menu-modal/main-menu-modal';
// import MyBasket from '../my-basket/my-basket';
import CategoriesModalItem from '../categories-modal/categories-modal-item/categories-modal-item';
import CategoriesModal from '../categories-modal/categories-modal';
import ConfirmationModal from '../header/confirmation-modal/confirmation-modal';
import CountriesListModal from '../header/countries-list-modal/countries-list-modal';
import HomeTab from '../home-tab/home-tab';
import CustomSelect from '../custom-select/custom-select';
import CustomBreadcrump from '../custom-breadcrump/custom-breadcrump';
import ShopSearchBlock from '../shop-search-block/shop-search-block';

>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e

import {
//   Footer,
  Header,
//   MyBasket,
//   CheckoutOrder,
//   ConfirmePhoneModal
} from '../index'
// import MainMenuItem from "../main-menu-modal/main-menu-item";

// <div>
// <Header/>
// <Home/>
// {/*<Shop/>*/}
// {/*<CheckoutOrder/>*/}
// {/*<About/>*/}
// {/*<MyBasket/>*/}
// {/*<ConfirmePhoneModal/>*/}
// <Footer/>
// </div>

function App() {
  return (
<<<<<<< HEAD
    <div>
      <Header />
      <Switch>
        <Route path="/about-aside" component={AboutAside} exact ></Route>
        <Route path="/about-main" component={AboutMain} exact ></Route>
        <Route path="/basket-item" component={BasketItem} exact ></Route>
        <Route path="/big-order" component={BigOrder} exact ></Route>
        <Route path="/carousel-container" component={CarouselContainer} exact ></Route>
        <Route path="/carousel-item" component={CarouselItem} exact ></Route>
        <Route path="/categories-modal-item" component={CategoriesModalItem} exact ></Route>
        <Route path="/categories-modal-tab" component={CategoriesModalTab} exact ></Route>
        <Route path="/categories-modal" component={CategoriesModal} exact ></Route>
        <Route path="/checkout-order-aside" component={CheckoutOrderAside} exact ></Route>
        <Route path="/checkout-order-main" component={CheckoutOrderMani} exact ></Route>
        <Route path="/confirm-phone-modal" component={ConfirmePhoneModal} exact ></Route>
        <Route path="/confirmation-code-modal" component={ConfirmeCodeModal} exact ></Route>
        <Route path="/contact-modal" component={ContactModal} exact ></Route>
        <Route path="/custom-breadcrump" component={CustomBreadcrump} exact ></Route>
        <Route path="/custom-pagination" component={CustomPagination} exact ></Route>
        <Route path="/custom-select" component={CustomSelect} exact ></Route>
        <Route path="/footer" component={Footer} exact ></Route>
        <Route path="/confirmation-modal" component={ConfirmationModal} exact ></Route>
        <Route path="/countries-list-modal" component={CountriesListModal} exact ></Route>
        <Route path="/home-first-block" component={HomeFirstBlock} exact ></Route>
        <Route path="/home-tab" component={HomeTab} exact ></Route>
        <Route path="/info-modal-carousel" component={InfoModalCarousel} exact ></Route>
        <Route path="/item-info-modal" component={ItemInfoModal} exact ></Route>
        <Route path="/main-menu-item" component={MainMenuItem} exact ></Route>
        <Route path="/main-menu-tab" component={MainMenuTab} exact ></Route>
        <Route path="/main-menu-modal" component={MainMenuModal} exact ></Route>
        <Route path="/my-basket" component={MyBasket} exact ></Route>
        <Route path="/no-result" component={NoResult} exact ></Route>
        <Route path="/our-apps" component={OurApps} exact ></Route>
        <Route path="/about" component={About} exact ></Route>
        <Route path="/checkout-order" component={CheckoutOrder} exact ></Route>
        <Route path="/" component={Home} exact ></Route>
        <Route path="/shop" component={Shop} exact ></Route>
        <Route path="/product-item" component={ProductItem} exact ></Route>
        <Route path="/question-block" component={QuestionBlock} exact ></Route>
        <Route path="/save-time" component={SaveTime} exact ></Route>
        <Route path="/shipping-address-modal" component={ShippingAddresModal} exact ></Route>
        <Route path="/shop-closed-modal" component={ShopClosedModal} exact ></Route>
        <Route path="/shop-search-block" component={ShopSearchBlock} exact ></Route>
        <Route path="/title" component={Title} exact ></Route>
        <Route path="/question-item" component={QuestionItem} exact ></Route>
      </Switch>
    </div>
=======
    <Switch>
      <Route path="/" component={Home} exact ></Route>
      <Route path="/shop" component={Shop} exact ></Route>
      <Route path="/about" component={About} exact ></Route>

      <Route path="/categories-modal-tab" component={CategoriesModalTab} exact ></Route>
      <Route path="/info-modal-carousel" component={InfoModalCarousel} exact ></Route>
      <Route path="/item-info-modal" component={ItemInfoModal} exact ></Route>
      <Route path="/main-menu-item" component={MainMenuItem} exact ></Route>
      <Route path="/main-menu-tab" component={MainMenuTab} exact ></Route>
      <Route path="/main-menu-modal" component={MainMenuModal} exact ></Route>
      <Route path="/confirmation-modal" component={ConfirmationModal} exact ></Route>
      <Route path="/countries-list-modal" component={CountriesListModal} exact ></Route>
      <Route path="/home-tab" component={HomeTab} exact ></Route>
      <Route path="/custom-select" component={CustomSelect} exact ></Route>
      <Route path="/custom-breadcrump" component={CustomBreadcrump} exact ></Route>
      <Route path="/shop-search-block" component={ShopSearchBlock} exact ></Route>
      <Route path="/categories-modal" component={CategoriesModal} exact ></Route>
    </Switch>
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
  )
}

export default App;
