import { dataTest, dataTestBeginsWith } from '@locators/utils';

export const cartLoc = {
  button: {
    remove: dataTestBeginsWith('remove'),
    checkout: dataTest('checkout'),
  },
};
