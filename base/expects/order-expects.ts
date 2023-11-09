import { priceToNumber } from '@helpers/convert';
import { Product } from '@models/products.interface';
import { SortType } from '@models/sort-type.type';
import { expect } from 'playwright/test';

function expectLoHiOrder(products: Product[]): void {
  for (let i = 1; i < products.length; i++) {
    const price1 = priceToNumber(products[i - 1].price);
    const price2 = priceToNumber(products[i].price);
    expect(price2).toBeGreaterThanOrEqual(price1);
  }
}

function expectHiLoOrder(products: Product[]): void {
  for (let i = 1; i < products.length; i++) {
    const price1 = priceToNumber(products[i - 1].price);
    const price2 = priceToNumber(products[i].price);
    expect(price2).toBeLessThanOrEqual(price1);
  }
}

function expectAzOrder(products: Product[]): void {
  for (let i = 1; i < products.length; i++) {
    const compare = products[i].title.localeCompare(products[i - 1].title);
    expect(compare).toBeGreaterThanOrEqual(0);
  }
}

function expectZaOrder(products: Product[]): void {
  for (let i = 1; i < products.length; i++) {
    const compare = products[i].title.localeCompare(products[i - 1].title);
    expect(compare).toBeLessThanOrEqual(0);
  }
}

export function expectProductsOrder(products: Product[], sortType: SortType): void {
  switch (sortType) {
    case 'az':
      expectAzOrder(products);
      break;
    case 'za':
      expectZaOrder(products);
      break;
    case 'lohi':
      expectLoHiOrder(products);
      break;
    case 'hilo':
      expectHiLoOrder(products);
      break;
  }
}
