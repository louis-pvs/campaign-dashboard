import * as ACTIONS from './actions';

const INITIAL_STATE = {
  loading: false,
  user: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTIONS.TYPES.CHANGE_USER_LOAD:
    return { ...state, loading: action.payload };
  case ACTIONS.TYPES.FETCH_USER:
    return { ...state, user: action.payload, loading: false };
  case ACTIONS.TYPES.LOGOUT_USER:
    return { ...state, user: action.payload, loading: false };
  default:
    return state;
  }
}
