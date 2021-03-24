import REGISTER_USER from '../actions/actionTypes';

const INITIAL_STATE = {
  age: 0,
  name: '',
  email: '',
}

const registerReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REGISTER_USER:
      return {...state,
        age: action.age,
        name: action.name,
        email: action.email,
      };
    default:
      return state;
  }
};

export default registerReducer;

