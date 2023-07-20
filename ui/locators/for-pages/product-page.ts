import { dataTest, dataTestBeginsWith } from '@locators/utils';

export const productLoc = {
  container: '.inventory_item',
  button: {
    addToCart: dataTestBeginsWith('add-to-cart'),
  },
  dropdown: {
    sort: dataTest('product_sort_container'),
  },
};
