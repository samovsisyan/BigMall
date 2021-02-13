import {CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from '../actions/checkout';

const initialState = {
  checkout: [],

};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST: {
      return {...state};
    }
    case CHECKOUT_SUCCESS: {
      return {
        ...state,
        checkout: action.payload.blog,
      };
    }


    default: {
      return state;
    }
  }
}