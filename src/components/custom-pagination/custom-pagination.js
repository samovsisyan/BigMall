<<<<<<< HEAD
// import React from 'react'
// import {Pagination} from 'react-bootstrap'
// import classes from './custom-pagination.module.scss'
//
// const CustomPagination = () => {
//   return (
//     <Pagination className={`justify-content-center w-100 ${classes.customPagination}`}>
//
//       <Pagination.Item className="rounded-circle">{1}</Pagination.Item>
//       <Pagination.Item>{10}</Pagination.Item>
//       <Pagination.Item>{11}</Pagination.Item>
//       <Pagination.Item active>{12}</Pagination.Item>
//       <Pagination.Item>{13}</Pagination.Item>
//
//       <Pagination.Ellipsis className={classes.customPagination__more}/>
//       <Pagination.Item>{20}</Pagination.Item>
//     </Pagination>
//   )
// }
//
// export default CustomPagination
import React, {Component} from 'react'
import {Pagination} from 'react-bootstrap'
import classes from './custom-pagination.module.scss'

=======
import React from 'react'
import {Container, Pagination} from 'react-bootstrap'
import classes from './custom-pagination.module.scss'

const CustomPagination = () => {
    return (
        <div>

        <Pagination className={`justify-content-center w-100 ${classes.customPagination}`}>
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e

class CustomPagination extends Component {
  constructor(props) {
    super(props)
    this.state = {pager: {}}
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    // set page if items array isn't empty
    // eslint-disable-next-line react/prop-types
    if (this.props.items && this.props.items.length) {
      // eslint-disable-next-line react/prop-types
      this.setPage(this.props.initialPage)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    // eslint-disable-next-line react/prop-types
    if (this.props.items !== prevProps.items) {
      // eslint-disable-next-line react/prop-types
      this.setPage(this.props.initialPage)
    }
  }

  setPage(page) {
    // eslint-disable-next-line react/prop-types
    const items = this.props.items
    let pager = this.state.pager

    if (page < 1 || page > pager.totalPages) {
      return
    }

    // get new pager object for specified page
    // eslint-disable-next-line react/prop-types
    pager = this.getPager(items.length, page)

    // get new page of items from items array
    // eslint-disable-next-line react/prop-types
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)

    // update state
    this.setState({pager: pager})

    // call change page function in parent component
    // eslint-disable-next-line react/prop-types
    this.props.onChangePage(pageOfItems)
  }

<<<<<<< HEAD
  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1

    // default page size is 10
    pageSize = pageSize || 8

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize)

    // eslint-disable-next-line one-var
    let startPage, endPage
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1
      endPage = totalPages
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1
        endPage = 10
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9
        endPage = totalPages
      } else {
        startPage = currentPage - 5
        endPage = currentPage + 4
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    // create an array of pages to ng-repeat in the pager control
    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    }
  }

  render() {
    const pager = this.state.pager

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null
    }
    return (
      <Pagination className={`justify-content-center w-100 ${classes.customPagination}`}>
        <Pagination.Item className="rounded-circle">
          {pager.pages.map((page, index) =>
            <li key={index} className={`justify-content-center w-100 ${classes.customPagination}`}>
              <a onClick={() => this.setPage(page)}>{page}</a>
            </li>
          )}
        </Pagination.Item>
        <Pagination.Ellipsis className={classes.customPagination__more}/>
      </Pagination>
=======
            <Pagination.Ellipsis className={classes.customPagination__more}/>
            <Pagination.Item>{20}</Pagination.Item>
        </Pagination>
        </div>
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
    )
  }
}

export default CustomPagination
