import axios from 'axios'


export function getUsers() {
  return axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const data = response.json()
        // eslint-disable-next-line no-console
        console.log('data,data,data', data)
      })
}


// export function postCheckout() {
//   return axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//       const data = response.json()
//       // eslint-disable-next-line no-console
//       console.log('data,data,data', data)
//     })
// }