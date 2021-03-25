import { LOGIN } from './actionTypes';

const registerUser = (login) => ({
  type: LOGIN,
  login,
});

export default registerUser;