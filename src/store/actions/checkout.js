export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAIL = 'CHECKOUT_FAIL';


export function actionCheckout(data) {
  return {
    type: CHECKOUT_REQUEST, payload: {data},
  };
}