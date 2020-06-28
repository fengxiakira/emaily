import { FETCH_USER } from '../actions/types'
// state to be initialized with empty project
// null: not know user logged in or not,defalut 
// usermodel: successfully login 
// false : fail login
export default function (state = null, action) {
    // console.log(action);
    // fetchUser-> axios response object
    switch (action.type) {
        case FETCH_USER:
            // action.payload is the user model, action
            // 的携带数据
            // not return empty string if user log out
            // ''||false
            // '' is false value
            return action.payload || false;

        default:
            return state;
    }
}