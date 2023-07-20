import { Product } from '@models/products.interface';

export const backpack: Product = {
  title: 'Sauce Labs Backpack',
  price: '$29.99',
};
export const bikeLight: Product = {
  title: 'Sauce Labs Bike Light',
  price: '$9.99',
};
export const tShirt: Product = {
  title: 'Sauce Labs Bolt T-Shirt',
  price: '$15.99',
};
export const jacket: Product = {
  title: 'Sauce Labs Fleece Jacket',
  price: '$49.99',
};
export const onesie: Product = {
  title: 'Sauce Labs Onesie',
  price: '$7.99',
};
export const redShirt: Product = {
  title: 'Test.allTheThings() T-Shirt (Red)',
  price: '$15.99',
};

export const allProducts = [backpack, bikeLight, tShirt, jacket, onesie, redShirt];
