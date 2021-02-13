import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.scss'
import App from './components/app'
import * as serviceWorker from './serviceWorker'

<<<<<<< HEAD

import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';

import reducers from './store/reducers';
import sagas from './store/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
=======
// import {createStore, applyMiddleware} from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import {Provider} from 'react-redux';
//
//
// import reducers from './store/reducers';
// import sagas from './store/sagas';
//
//
// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// // mount it on the Store
// const store = createStore(
//     reducers,
//     applyMiddleware(sagaMiddleware)
// );
//
// // then run the saga
// sagaMiddleware.run(sagas);


ReactDOM.render(
    // <Provider store={store}>
        <Router>
            <App/>
        </Router>,
    // </Provider>,
>>>>>>> bbafdad8767f30299c50a7c2f56ebffb534c1d3e
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
