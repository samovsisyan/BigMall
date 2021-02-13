// import React from 'react';
// import {Container, Row, Button, Card, Form} from 'react-bootstrap'
// import {ProductItem, CustomPagination, CustomBreadcrump, ShopSearchBlock} from '../../index'
// import classes from './shop.module.scss'
//
//
// import ReactPaginate from 'react-paginate';
//
// class Ub1Shop extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             offset: 0,
//             data: [],
//             perPage: 10,
//             currentPage: 0,
//
//         };
//
//         this.handlePageClick = this
//             .handlePageClick
//             .bind(this);
//     }
//
//     handlePageClick = (e) => {
//         const selectedPage = e.selected;
//         const offset = selectedPage * this.state.perPage;
//
//         this.setState({
//             currentPage: selectedPage,
//             offset: offset
//         }, () => {
//             this.receivedData()
//         });
//
//     };
//
//
//     receivedData() {
//
//         const data = products;
//         const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
//
//         const postData = slice.map(pd => <React.Fragment>
//             <p><img src={pd.img} alt=""/></p>
//             <p>{pd.info}</p>
//             <p>{pd.weight}</p>
//             <p>{pd.price}</p>
//             <p>{pd.oldprice}</p>
//
//                 </React.Fragment>)
//
//                 this.setState({
//                     pageCount: Math.ceil(data.length / this.state.perPage),
//                     postData
//                 })
//     }
//
//     handlePageClick = (e) => {
//         const selectedPage = e.selected;
//         const offset = selectedPage * this.state.perPage;
//
//         this.setState({
//             currentPage: selectedPage,
//             offset: offset
//         }, () => {
//             this.receivedData()
//         });
//
//     };
//
//     componentDidMount() {
//         this.receivedData()
//     }
//
//
//     render() {
//         console.log("this.state", this.state)
//         console.log("offset", this.state.offset)
//         console.log("perPage", this.state.perPage)
//         console.log("currentPage", this.state.currentPage)
//         return (
//             <div>
//                 <Container fluid className={classes.shop}>
//                     <Container className="p-sm-0">
//                         <section className="d-flex justify-content-between align-items-baseline">
//                             <CustomBreadcrump/>
//                             <div className="text-right">
//                                 <p className="m-0">
//                                     График работы: с 09:10 до 21:30
//                                 </p>
//                                 <Button variant="link" className={`p-0 ${classes.shop__infBtn}`}>Информация о
//                                     магазине</Button>
//                             </div>
//                         </section>
//                         <ShopSearchBlock/>
//                         {this.state.postData}
//                         <ReactPaginate
//                             previousLabel={"prev"}
//                             nextLabel={"next"}
//                             breakLabel={"..."}
//                             breakClassName={"break-me"}
//                             pageCount={this.state.pageCount}
//                             marginPagesDisplayed={2}
//                             pageRangeDisplayed={5}
//                             onPageChange={this.handlePageClick}
//                             containerClassName={"pagination"}
//                             subContainerClassName={"pages pagination"}
//                             activeClassName={"active"}/>
//                         <Row>
//                             <section className={`w-100 d-flex flex-wrap ${classes.productItems}`}>
//                                 <UbProductItem/>
//                             </section>
//                                 <CustomPagination/>
//                         </Row>
//                     </Container>
//                 </Container>
//             </div>
//         );
//     }
// }
//
// export default Ub1Shop;
//
//
