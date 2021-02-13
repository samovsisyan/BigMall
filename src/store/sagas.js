import geolocation from './geolocation/saga'
import {all} from 'redux-saga/effects'

export default function* sagas() {
  yield all([
    geolocation(),
  ])
}

