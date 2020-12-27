// ajax request
import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

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
  // res.data is user model
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// response sends back user
export const handleToken = (token) => async (dispatch) => {
  // made a post request to back end server
  // first: url second: the entire token we got back from stripe
  const res = await axios.post("/api/stripe", token);
  // get back the same user model as fetchUser
  dispatch({ type: FETCH_USER, payload: res.data });
};

// redux return
export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

//The app code dispatches an action to the Redux store
export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
