import {takeLatest, call, put} from 'redux-saga/effects';
import {PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL} from '../actions/products';
import * as api from '../../api';

function* handleBlogRequest() {
  try {
    const data = yield call(api.getUsers);
    yield put({
      type: PRODUCTS_SUCCESS,
      payload: {blog: data},
    });
  } catch (e) {
    yield put({
      type: PRODUCTS_FAIL,
      message: e.message,
    });
  }
}
export default function* watchers() {
  yield takeLatest(PRODUCTS_REQUEST, handleBlogRequest);
}