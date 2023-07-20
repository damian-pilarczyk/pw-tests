import { dataTest, dataTestBeginsWith } from './utils';

export const productLoc = {
  container: '.inventory_item',
  label: {
    title: '.inventory_item_name',
    price: '.inventory_item_price',
  },
  button: {
    addToCart: dataTestBeginsWith('add-to-cart'),
  },
  dropdown: {
    sort: dataTest('product_sort_container'),
  },
};
