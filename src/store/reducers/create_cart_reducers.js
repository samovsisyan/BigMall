import {ADD_TO_CART, DELETE_FROM_CART, UPDATE_ITEM_UNITS} from '../actions/products';

export default function createCartReducers(state=[], action={}) {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case ADD_TO_CART:
      const existingIndex = findProductIndex(state, action.payload.id);
      if (existingIndex !== -1) {
        state[existingIndex].units += 1;
        return state.concat([]);
      }
      return state.concat(action.payload);
    // eslint-disable-next-line no-case-declarations
    case UPDATE_ITEM_UNITS:
      const existingItemIndex = findProductIndex(state, action.payload.id);
      if (state[existingItemIndex].units === 0 && action.payload.units === -1) {
        break;
      }
      state[existingItemIndex].units += action.payload.units;
      return state.concat([]);

    // eslint-disable-next-line no-case-declarations
    case DELETE_FROM_CART:
      const indexToDel = findProductIndex(state, action.payload.id);
      return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
  }

  function findProductIndex(products, id) {
    return products.findIndex((p) => p.id === id)
  }

  return state;
}