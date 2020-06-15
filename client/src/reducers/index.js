// index.js list all reducers in ./reducers/index.js
// {named import }It only works if A contains a named export called A:
import { combineReducers } from 'redux'
// default import, It only works if A has the default export:
import authReducer from './authReducer'

// keys in state object
export default combineReducers({
    auth: authReducer
});