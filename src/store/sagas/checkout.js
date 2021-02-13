import {takeLatest, call, put} from 'redux-saga/effects';
import {CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAIL} from '../actions/checkout';
import * as api from '../../api';

function* handleCheckoutRequest() {
  try {
    const data = yield call(api.getUsers, action.payload.data);
    yield put({
      type: CHECKOUT_SUCCESS,
      payload: {checkout_data: data},
    });
  } catch (e) {
    yield put({
      type: CHECKOUT_FAIL,
      message: e.message,
    });
  }
}
export default function* watchers() {
  yield takeLatest(CHECKOUT_REQUEST, handleCheckoutRequest);
}