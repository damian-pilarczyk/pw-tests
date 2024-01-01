import { priceToNumber } from '@helpers/convert';
import { Product } from '@models/products.interface';
import { NumberSortType, SortType, StringSortType } from '@models/sort-type.type';
import { expect } from 'playwright/test';

function getExpected(products: Product[], sortType: SortType) {
  const titleOrder = (sort: StringSortType) => {
    const order = products.map((x) => x.title).sort();
    return sort === 'az' ? order : order.reverse();
  };

  const priceOrder = (sort: NumberSortType) =>
    products
      .map((x) => priceToNumber(x.price))
      .sort((x, y) => (sort === 'lohi' ? x - y : y - x))
      .map((x) => `${x}`);

  const isTitleOrdering = (sortType: SortType): sortType is StringSortType => ['az', 'za'].includes(sortType);

  return isTitleOrdering(sortType) ? titleOrder(sortType) : priceOrder(sortType);
}

export function expectProductsOrder(products: Product[], sortType: SortType) {
  const expectedSort = getExpected(products, sortType);
  const compare = ['lohi', 'hilo'].includes(sortType)
    ? (product: Product, expected: string) => expect(priceToNumber(product.price)).toEqual(+expected)
    : (product: Product, expected: string) => expect(product.title).toEqual(expected);

  products.forEach((product, i) => compare(product, expectedSort[i]));
}
