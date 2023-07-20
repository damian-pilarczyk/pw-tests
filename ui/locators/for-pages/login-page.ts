import { dataTest } from '@locators/utils';

export const loginLoc = {
  input: {
    username: dataTest('username'),
    password: dataTest('password'),
  },
  button: {
    login: dataTest('login-button'),
  },
};
