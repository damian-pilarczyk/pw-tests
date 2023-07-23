import { dataTest } from '@locators/utils';

export const yourInfoLoc = {
  input: {
    firstName: dataTest('firstName'),
    lastName: dataTest('lastName'),
    zip: dataTest('postalCode'),
  },
  button: {
    continue: dataTest('continue'),
  },
};
