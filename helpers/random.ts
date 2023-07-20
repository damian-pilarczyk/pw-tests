import { faker } from '@faker-js/faker';
import { Product } from '@models/products.interface';
import { allProducts } from '@data/products';

export function getRandomItems(numberOfItems: number): Product[] {
  return faker.helpers.arrayElements(allProducts, numberOfItems);
}
