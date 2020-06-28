// ajax request
import axios from 'axios';
import { FETCH_USER } from './types'

// action creater
// arrow function assign to fetchUser variable
// return a function rather then return action
// same as ... fetchuUser =()=>{
//          return function(dispatch){
//              ...
//              }
//          }写法不同
// single argument not need ()
// async function
export const fetchUser = () => async (dispatch) => {
    // make get request to backend
    // relevant path
    // axios
    //     .get('/api/current_user')
    //     // dipatch an action after ajax request completed,asynchrouous
    //     .then(res => dispatch({ type: FETCH_USER, payload: res }))
    //  res is the output of axios
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
};


