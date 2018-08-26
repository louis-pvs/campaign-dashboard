import axios from 'axios';

import * as TYPES from './types';

const fetchUser = () => {
  return function(dispatch) {
    dispatch({ type: TYPES.CHANGE_USER_LOAD, payload: true });
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: TYPES.FETCH_USER, payload: res.data.user }))
      .catch(() => ({ type: TYPES.FETCH_USER, payload: null }));
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

export { TYPES, fetchUser, logoutUser };
