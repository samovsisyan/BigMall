<<<<<<< HEAD
import {all, fork} from 'redux-saga/effects';

import products from './products';
import checkout from './checkout';


export default function* root() {
  const sagas = [
    products,
    checkout,
  ];
  yield all(sagas.map(fork));
=======
import { all, fork } from 'redux-saga/effects';




export default function* root() {
    const sagas = [


    ];
    yield all(sagas.map(fork));
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
}