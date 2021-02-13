import {
  GET_GEOLOCATION_FETCH,
  GET_GEOLOCATION_SUCCESS,
  GET_GEOLOCATION_FAILED
} from './types'
import {put, takeLatest, call} from 'redux-saga/effects'

const fetchYaGeocoder = () => {
  return new Promise(resolve => {
    const apiKey = '281f672b-d955-4be1-92b8-26562f232c00'

    navigator.geolocation.getCurrentPosition(async pos => {
      localStorage['firstEnter'] = true

      const {longitude, latitude} = pos.coords

      const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${longitude},${latitude}&format=json&kind=locality`)

      if (response.ok) {
        const json = await response.json()
        resolve(json.response.GeoObjectCollection.featureMember[0].GeoObject.name)
      }
    })
  })
}

function* getGeolocation(action) {
  try {
    const country = yield call(fetchYaGeocoder)

    yield put({type: GET_GEOLOCATION_SUCCESS, payload: country})
  } catch (e) {
    yield put({type: GET_GEOLOCATION_FAILED, payload: null})
  }
}

function* geolocation() {
  yield takeLatest(GET_GEOLOCATION_FETCH, getGeolocation)
}

export default geolocation