import { REGISTER_USER } from './actionTypes';

const registerUser = (user) => ({
  type: REGISTER_USER,
  user,
});

export default registerUser;