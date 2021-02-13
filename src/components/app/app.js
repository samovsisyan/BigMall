import React from 'react'
import './app.scss'
import 'react-phone-input-2/lib/style.css'
import {
    Footer,
    Header,
    MyBasket,
    CheckoutOrder,
    NoResult,
    BasketItem,
    BigOrder,
    CarouselContainer,
    CarouselItem,
    ConfirmeCodeModal,
    ContactModal,
    CustomBreadcrump,
    CustomPagination,
    CustomSelect,
    HomeFirstBlock,
    InfoModalCarousel,
    ItemInfoModal,
    MainMenuModal,
    OurApps,
    QuestionBlock,
    SaveTime,
    ShippingAddressModal,
    ShopClosedModal,
    ShopSearchBlock,
    Title,
    Shop,
    About,
    Home,
    AboutAside,
    AboutMain,
    CategoriesModalItem,
    CategoriesModalTab,
    CheckoutOrderAside,
    CheckoutOrderMani,
    ConfirmPhoneModal,
    HomeTab,
    ProductItem,
    QuestionItem,
    ConfirmationModal,
    CountriesListModal,
    MainMenuItem,
    MainMenuTab
} from '../index'
import {useRoutes} from "hookrouter";

const routes = {
    '/about-aside': () => <AboutAside />,
    '/about-main': () => <AboutMain />,
    '/basket-item': () => <BasketItem />,
    '/big-order': () => <BigOrder />,
    '/carousel-container': () => <CarouselContainer />,
    '/carousel-item': () => <CarouselItem />,
    '/categories-modal-item': () => <CategoriesModalItem />,
    '/categories-modal-tab': () => <CategoriesModalTab />,
    '/checkout-order-aside': () => <CheckoutOrderAside />,
    '/checkout-order-main': () => <CheckoutOrderMani />,
    '/confirm-phone-modal': () => <ConfirmPhoneModal />,
    '/confirm-code-modal': () => <ConfirmeCodeModal />,
    '/contact-modal': () => <ContactModal />,
    '/custom-breadcrump': () => <CustomBreadcrump />,
    '/custom-pagination': () => <CustomPagination />,
    '/custom-select': () => <CustomSelect />,
    '/footer': () => <Footer />,
    '/header': () => <Header />,
    '/confirmation-modal': () => <ConfirmationModal />,
    '/countries-list-modal': () => <CountriesListModal />,
    '/home-first-block': () => <HomeFirstBlock />,
    '/home-tab': () => <HomeTab />,
    '/info-modal-carousel': () => <InfoModalCarousel />,
    '/item-info-modal': () => <ItemInfoModal />,
    '/main-menu-modal': () => <MainMenuModal />,
    '/main-menu-item': () => <MainMenuItem />,
    '/main-menu-tab': () => <MainMenuTab />,
    '/my-basket': () => <MyBasket />,
    '/no-result': () => <NoResult />,
    '/our-apps': () => <OurApps />,
    '/about': () => <About />,
    '/checkout-order': () => <CheckoutOrder />,
    '/': () => <Home />,
    '/shop': () => <Shop />,
    '/product-item': () => <ProductItem />,
    '/question-block': () => <QuestionBlock />,
    '/question-item': () => <QuestionItem />,
    '/save-time': () => <SaveTime />,
    '/shipping-address-modal': () => <ShippingAddressModal />,
    '/shop-closed-modal': () => <ShopClosedModal />,
    '/shop-search-block': () => <ShopSearchBlock />,
    '/title': () => <Title />,
};

export default function App() {
    const routeResult = useRoutes(routes);
    return routeResult || <NoResult />;
}

