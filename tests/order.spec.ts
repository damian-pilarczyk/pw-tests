import { test } from '@base/base-ui-test';
import { SortType } from '@models/sort-type.type';
import { getRandomItems } from 'helpers/random';

const testCase = (sortType: SortType): void => {
  test(sortType, async ({ ui, standardUser }) => {
    const items = getRandomItems(2);
    await ui.visit('/');
    await ui.loginPage.login(standardUser);
    await ui.productsPage.addToCart(items);
    await ui.productsPage.sort(sortType);
    await ui.productsPage.verifyProductsOrder(sortType);
  });
};

test.describe('Products order', () => {
  testCase('az');
  testCase('za');
  testCase('lohi');
  testCase('hilo');
});
