import {GET_GEOLOCATION_SUCCESS} from './types'

const initState = {
  position: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_GEOLOCATION_SUCCESS: {
      // console.log(actions.payload);

      return {
        ...state,
        position: action.payload
      }
    }

    default:
      return state
  }
}