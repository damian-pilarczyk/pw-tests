import { dataTest } from '@ui/locators/utils';

export const loginLoc = {
  input: {
    username: dataTest('username'),
    password: dataTest('password'),
  },
  button: {
    login: dataTest('login-button'),
  },
};
