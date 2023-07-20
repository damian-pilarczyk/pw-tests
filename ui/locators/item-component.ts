import { dataTestBeginsWith } from './utils';

export const itemLoc = {
  container: '.inventory_item',
  label: {
    title: '.inventory_item_name',
  },
  button: {
    addToCart: dataTestBeginsWith('add-to-cart'),
  },
};
