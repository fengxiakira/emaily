// redux data
// import materialize-css from node-module materialize-css,
// no need to add relative paths
import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';



import App from "./components/App";
import reducers from './reducers';
// action creater, modify states


// reducer, state, applyMiddleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


// first : root component, second: supplied container
// second: render react appliction to 
// return a reference to the component
ReactDOM.render(

    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')

);

