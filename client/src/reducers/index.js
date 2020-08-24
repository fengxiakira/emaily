// index.js list all reducers in ./reducers/index.js
// {named import }It only works if A contains a named export called A:
import { combineReducers } from 'redux'
// default import, It only works if A has the default export:
import authReducer from './authReducer'
// import redux form
import {reducer as reduxForm} from 'redux-form'

// keys in state object
export default combineReducers({
    auth: authReducer,
    form: reduxForm
});