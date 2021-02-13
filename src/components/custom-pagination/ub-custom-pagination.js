import React, {Component} from 'react';
import {Pagination} from "react-bootstrap";
import classes from "./custom-pagination.module.scss";

class UbCustomPagination extends Component {
    render() {
        return (
            <div>
                <Pagination className={`justify-content-center w-100 ${classes.customPagination}`}>

                    <Pagination.Item className="rounded-circle">{1}</Pagination.Item>
                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>

                    <Pagination.Ellipsis className={classes.customPagination__more}/>
                    <Pagination.Item>{20}</Pagination.Item>
                </Pagination>
            </div>
        );
    }
}

export default UbCustomPagination;