// redux data
// import materialize-css from node-module materialize-css,
// no need to add relative paths
import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'



import App from "./components/App";
import reducers from './reducers';

// reducer, state, applyMiddleware
const store = createStore(reducers, {}, applyMiddleware());


// first : root component, second: supplied container
// second: render react appliction to 
// return a reference to the component
ReactDOM.render(
    // add provider tag to store, App as a child of component
    // provider is a react component
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root'));