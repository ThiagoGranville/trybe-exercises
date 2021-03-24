import { LOGIN } from './actionTypes';

const registerUser = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export default registerUser;