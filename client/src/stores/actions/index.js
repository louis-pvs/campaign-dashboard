import axios from 'axios';
import * as TYPES from './types';

const fetchUser = () => {
  return function(dispatch) {
    dispatch({ type: TYPES.CHANGE_USER_LOAD, payload: true });
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: TYPES.FETCH_USER, payload: res.data.user }))
      .catch(error =>
        dispatch({
          type: TYPES.FETCH_USER,
          payload: new Error(error),
          error: true
        })
      );
  };
};

const logoutUser = () => {
  return function(dispatch) {
    dispatch({ type: TYPES.CHANGE_USER_LOAD, payload: true });
    axios
      .get('/api/logout')
      .then(res =>
        dispatch({ type: TYPES.LOGOUT_USER, payload: res.data.user })
      );
  };
};

/**
 * @param {String} token - token to be generated by stripe-checkout
 */
const handleStripeToken = token => {
  return function(dispatch) {
    dispatch({ type: TYPES.CHANGE_USER_LOAD, payload: true });
    axios
      .post('/api/stripe', token)
      .then(res =>
        dispatch({
          type: TYPES.POST_TOKEN,
          payload: res.data.user
        })
      )
      .catch(error =>
        dispatch({
          type: TYPES.FETCH_USER,
          payload: new Error(error),
          error: true
        })
      );
  };
};

export { TYPES, fetchUser, logoutUser, handleStripeToken };
