export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_FAIL = 'PRODUCTS_FAIL';


export function fetchBlog() {
  return {
    type: PRODUCTS_REQUEST, payload: {},
  };
}