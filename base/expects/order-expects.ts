import { priceToNumber } from '@helpers/convert';
import { Product } from '@models/products.interface';
import { SortType } from '@models/sort-type.type';
import { expect } from 'playwright/test';

function getExpected(products: Product[], sortType: SortType) {
  switch (sortType) {
    case 'az':
      return products.map((x) => x.title).sort();
    case 'za':
      return products
        .map((x) => x.title)
        .sort()
        .reverse();
    case 'lohi':
      return products
        .map((x) => priceToNumber(x.price))
        .sort((x, y) => x - y)
        .map((x) => `${x}`);
    case 'hilo':
      return products
        .map((x) => priceToNumber(x.price))
        .sort((x, y) => y - x)
        .map((x) => `${x}`);
  }
}

export function expectProductsOrder(products: Product[], sortType: SortType) {
  const expectedSort = getExpected(products, sortType);
  const compare = ['lohi', 'hilo'].includes(sortType)
    ? (product: Product, expected: string) => expect(priceToNumber(product.price)).toEqual(+expected)
    : (product: Product, expected: string) => expect(product.title).toEqual(expected);

  products.forEach((product, i) => compare(product, expectedSort[i]));
}
