import { REGISTER_USER } from '../actions/actionTypes';

const INITIAL_STATE = [];

const registerReducer = (state = INITIAL_STATE, action) => {
  const user = action.user;
  switch(action.type) {
    case REGISTER_USER:
      return state.concat(user);
    default:
      return state;
  }
};

export default registerReducer;

