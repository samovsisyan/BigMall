// import React from 'react'
// import {Card, Button, Form} from 'react-bootstrap'
// import classes from './product-item.module.scss'
//
// const ProductItem = () => {
//   return (
//     <div className={`col-12 col-sm-6  col-md-4 col-xl-3 ${classes.product}`}>
//       <Card
//         className={`ml-0 h-100 w-100 border-0 d-flex flex-column justify-content-center align-items-center p-0 bg-white ${classes.product__item}`}>
//         <div className={`position-relative ${classes.product__item__top}`}>
//           <Card.Img variant="center" className={`w-100 h-100 ${classes.product__item__top__img}`}
//             src="./images/item.png"/>
//           {/* TODO add 'd-flex' class if the item clicked*/}
//           <div
//             className={`d-none align-items-end justify-content-center mx-auto h-100 position-absolute ${classes.product__item__top__countContainer}`}>
//             <Button type="button"
//               className={`d-flex align-items-center justify-content-center bg-transparent shadow-none rounded-circle flex-shrink-0 ${classes.product__item__top__minus}`}>
//               <svg width="14" height="4" viewBox="0 0 14 4" fill="none"
//                 xmlns="http://www.w3.org/2000/svg">
//                 <path d="M2 2H12" stroke="#222C54" strokeWidth="2.2" strokeLinecap="round"/>
//               </svg>
//             </Button>
//             <Form.Group className="m-0">
//               <Form.Control type="text"
//                 className={`border-0 m-0 text-center shadow-none flex-shrink-0 d-flex align-items-center justify-content-center  ${classes.product__item__top__number}`}
//                 value='3'/>
//             </Form.Group>
//             <Button type="button"
//               className={`d-flex align-items-center justify-content-center shadow-none rounded-circle flex-shrink-0 border-0 ${classes.product__item__top__plus}`}>
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
//                 xmlns="http://www.w3.org/2000/svg">
//                 <path d="M2 7H12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
//                 <path d="M7 2L7 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
//               </svg>
//             </Button>
//           </div>
//         </div>
//         <Card.Body className={`flex-grow-1 w-100 d-flex flex-column ${classes.product__item__info}`}>
//           <Card.Text className="text-break m-0">
//             Овёс &#34;Образ Жизни Алтая&#34; голозёрный
//           </Card.Text>
//           <Card.Text className={`flex-grow-1 d-flex align-items-center ${classes.product__item__info__weight}`}>500г</Card.Text>
//           <div className="d-flex justify-content-between">
//             <div className="align-self-end">
//               <h5 className={`m-0 align-self-end ${classes.product__item__info__price}`}>16 200 <span>AMD</span></h5>
//               <Card.Text className={`mb-0 ${classes.product__item__info__oldprice}`}>18 200 AMD</Card.Text>
//             </div>
//             <div
//               className={`mb-0 rounded-circle d-flex flex-shrink-0 align-items-center justify-content-center ${classes.product__item__info__bascet}`}>
//               <svg width="22" height="18" viewBox="0 0 22 18" fill="none"
//                 xmlns="http://www.w3.org/2000/svg">
//                 <path
//                   d="M18.2625 11.3438C18.6595 11.3438 19.0565 11.0625 19.1557 10.6875L21.9348 3.1875C22.0341 2.90625 22.0341 2.53125 21.8356 2.25C21.637 1.96875 21.3393 1.78125 20.9423 1.78125H5.95515L5.26038 0.5625C5.06188 0.1875 4.66487 0 4.26786 0H1.09178C0.496263 0 0 0.46875 0 1.03125C0 1.59375 0.496263 2.0625 1.09178 2.0625H3.67234L4.26786 3.1875L6.84842 11.4375V11.5312L7.54319 13.5937H6.15366C5.95515 13.5937 5.75665 13.6875 5.55814 13.7812C4.56562 13.9688 3.7716 14.8125 3.7716 15.8437C3.7716 16.9687 4.76412 18 6.0544 18C7.34469 18 8.33721 17.0625 8.33721 15.8437C8.33721 15.75 8.33721 15.75 8.33721 15.6562H15.7811C15.7811 15.75 15.7811 15.75 15.7811 15.8437C15.7811 16.9687 16.7737 18 18.064 18C19.3542 18 20.3468 17.0625 20.3468 15.8437C20.3468 14.8125 19.652 14.0625 18.5602 13.7812C18.3617 13.6875 18.1632 13.5937 17.9647 13.5937H9.72675L9.23048 12.0938L18.2625 11.3438Z"
//                   fill="white"/>
//               </svg>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   )
// }
//
// export default ProductItem


import React, {Component} from 'react'
import {Card, Button, Form} from 'react-bootstrap'
import classes from './product-item.module.scss'
import {CustomPagination, ItemInfoModal} from '../index'
import data from '../../data'
class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item_info_modal: false,
      exampleItems: data,
      pageOfItems: []

    }
    this.productQuantintyClick = this.productQuantintyClick.bind(this)
    this.onChangePage = this.onChangePage.bind(this);
  }

<<<<<<< HEAD
  productQuantintyClick() {
    this.setState({
      item_info_modal: !this.state.item_info_modal
    }
    )
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({pageOfItems: pageOfItems});
  }
  render() {
=======


const ProductItem = () => {
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
    return (
      <div>
        <div className="row">
          {this.state.pageOfItems.map(item =>
            <div key={item.id} className={`col-12 col-sm-6  col-md-4 col-xl-3 ${classes.product}`}>
              <Card
                className={`ml-0 h-100 w-100 border-0 d-flex flex-column justify-content-center align-items-center p-0 bg-white ${classes.product__item}`}>
                <div className={`position-relative ${classes.product__item__top}`}>
                  <Card.Img variant="center" className={`w-100 h-100 ${classes.product__item__top__img}`} src={item.img}/>
                  {/* TODO add 'd-flex' class if the item clicked*/}
                  <div
                    className={`d-none align-items-end justify-content-center mx-auto h-100 position-absolute ${classes.product__item__top__countContainer}`}>
                    <Button type="button" className={`d-flex align-items-center justify-content-center bg-transparent shadow-none rounded-circle flex-shrink-0 ${classes.product__item__top__minus}`}>
                      <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2H12" stroke="#222C54" strokeWidth="2.2" strokeLinecap="round"/>
                      </svg>
                    </Button>
                    <Form.Group className="m-0">
                      <Form.Control type="text" className={`border-0 m-0 text-center shadow-none flex-shrink-0 d-flex align-items-center justify-content-center  ${classes.product__item__top__number}`} value='3'/>
                    </Form.Group>
                    <Button type="button" className={`d-flex align-items-center justify-content-center shadow-none rounded-circle flex-shrink-0 border-0 ${classes.product__item__top__plus}`}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 7H12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                        <path d="M7 2L7 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                      </svg>
                    </Button>
                  </div>
                </div>
                <Card.Body className={`flex-grow-1 w-100 d-flex flex-column ${classes.product__item__info}`}>
                  <Card.Text className="text-break m-0">Овёс &#34;Образ Жизни Алтая&#34; голозёрный
                  </Card.Text>
                  <Card.Text
                    className={`flex-grow-1 d-flex align-items-center ${classes.product__item__info__weight}`}>{item.weight}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <div className="align-self-end">
                      <h5
                        className={`m-0 align-self-end ${classes.product__item__info__price}`}>{item.price}<span>AMD</span>
                      </h5>
                      <Card.Text className={`mb-0 ${classes.product__item__info__oldprice}`}>{item.oldprice}</Card.Text>
                    </div>
                    <div onClick={this.productQuantintyClick} className={`mb-0 rounded-circle d-flex flex-shrink-0 align-items-center justify-content-center ${classes.product__item__info__bascet}`}>
                      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18.2625 11.3438C18.6595 11.3438 19.0565 11.0625 19.1557 10.6875L21.9348 3.1875C22.0341 2.90625 22.0341 2.53125 21.8356 2.25C21.637 1.96875 21.3393 1.78125 20.9423 1.78125H5.95515L5.26038 0.5625C5.06188 0.1875 4.66487 0 4.26786 0H1.09178C0.496263 0 0 0.46875 0 1.03125C0 1.59375 0.496263 2.0625 1.09178 2.0625H3.67234L4.26786 3.1875L6.84842 11.4375V11.5312L7.54319 13.5937H6.15366C5.95515 13.5937 5.75665 13.6875 5.55814 13.7812C4.56562 13.9688 3.7716 14.8125 3.7716 15.8437C3.7716 16.9687 4.76412 18 6.0544 18C7.34469 18 8.33721 17.0625 8.33721 15.8437C8.33721 15.75 8.33721 15.75 8.33721 15.6562H15.7811C15.7811 15.75 15.7811 15.75 15.7811 15.8437C15.7811 16.9687 16.7737 18 18.064 18C19.3542 18 20.3468 17.0625 20.3468 15.8437C20.3468 14.8125 19.652 14.0625 18.5602 13.7812C18.3617 13.6875 18.1632 13.5937 17.9647 13.5937H9.72675L9.23048 12.0938L18.2625 11.3438Z"
                          fill="white"/>
                      </svg>
                    </div>
<<<<<<< HEAD
                  </div>
                </Card.Body>
              </Card>
=======
                    <Card.Body className={`flex-grow-1 w-100 d-flex flex-column ${classes.product__item__info}`}>
                        <Card.Text className="text-break m-0">
                            Овёс "Образ Жизни Алтая" голозёрный
                        </Card.Text>
                        <Card.Text className={`flex-grow-1 d-flex align-items-center ${classes.product__item__info__weight}`}>500г</Card.Text>
                        <div className="d-flex justify-content-between">
                            <div className="align-self-end">
                                <h5 className={`m-0 align-self-end ${classes.product__item__info__price}`}>16 200<span>AMD</span></h5>
                                <Card.Text className={`mb-0 ${classes.product__item__info__oldprice}`}>18 200 AMD</Card.Text>
                            </div>
                            <div
                                className={`mb-0 rounded-circle d-flex flex-shrink-0 align-items-center justify-content-center ${classes.product__item__info__bascet}`}>
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.2625 11.3438C18.6595 11.3438 19.0565 11.0625 19.1557 10.6875L21.9348 3.1875C22.0341 2.90625 22.0341 2.53125 21.8356 2.25C21.637 1.96875 21.3393 1.78125 20.9423 1.78125H5.95515L5.26038 0.5625C5.06188 0.1875 4.66487 0 4.26786 0H1.09178C0.496263 0 0 0.46875 0 1.03125C0 1.59375 0.496263 2.0625 1.09178 2.0625H3.67234L4.26786 3.1875L6.84842 11.4375V11.5312L7.54319 13.5937H6.15366C5.95515 13.5937 5.75665 13.6875 5.55814 13.7812C4.56562 13.9688 3.7716 14.8125 3.7716 15.8437C3.7716 16.9687 4.76412 18 6.0544 18C7.34469 18 8.33721 17.0625 8.33721 15.8437C8.33721 15.75 8.33721 15.75 8.33721 15.6562H15.7811C15.7811 15.75 15.7811 15.75 15.7811 15.8437C15.7811 16.9687 16.7737 18 18.064 18C19.3542 18 20.3468 17.0625 20.3468 15.8437C20.3468 14.8125 19.652 14.0625 18.5602 13.7812C18.3617 13.6875 18.1632 13.5937 17.9647 13.5937H9.72675L9.23048 12.0938L18.2625 11.3438Z"
                                        fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
            </div>
          )}
          {this.state.item_info_modal ? <ItemInfoModal/> : <div></div>}
        </div>
        <CustomPagination items={this.state.exampleItems} onChangePage={this.onChangePage}/>
      </div>
    )
  }
}

export default ProductItem