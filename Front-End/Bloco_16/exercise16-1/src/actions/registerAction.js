import REGISTER_USER from './actionTypes';

const registerUser = (age, name, email) => ({
  type: REGISTER_USER,
  age,
  name,
  email,
});

export default registerUser;