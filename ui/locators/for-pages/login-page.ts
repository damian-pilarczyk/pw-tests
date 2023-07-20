import { dataTest } from '@locators/utils';

export const loginLoc = {
  label: {
    error: dataTest('error'),
  },
  input: {
    username: dataTest('username'),
    password: dataTest('password'),
  },
  button: {
    login: dataTest('login-button'),
  },
};
