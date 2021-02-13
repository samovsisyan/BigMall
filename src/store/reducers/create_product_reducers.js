import data from '../../data'

const DATA = data;

export default function createProductsReducer(state=DATA, action={}) {
  // PLEASE NOTE:
  // below actions are unused
  // kept for instance - Ajinkya
  switch (action.type) {
    case 'ADD_PRODUCT':
      return state.concat(action.payload);
    case 'DELETE_PRODUCT':
      const indexToDel = findProductIndex(state, action.payload.id);
      return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
    case 'UPDATE_PRODUCT':
      const indexToUpdate = findProductIndex(state, action.payload.id);
      const newProductExtend = {
        ...state[indexToUpdate], title: action.payload.title
      };
      return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate+1)];
  }

  function findProductIndex(products, id) {
    return products.findIndex((p) => p.id === id)
  }

  return state;
}