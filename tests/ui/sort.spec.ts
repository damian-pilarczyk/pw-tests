import { test, expect } from '@base/base-ui-test';
import { SortType } from '@models/sort-type.type';

const testCase = (sortType: SortType): void => {
  test(sortType, async ({ ui: { visit, loginPage, productsPage }, users: { standardUser } }) => {
    await visit('/');
    await loginPage.login(standardUser);
    await productsPage.sort(sortType);
    await expect(productsPage).toHaveProductsOrder(sortType);
  });
};

test.describe('Products sorting', () => {
  testCase('az');
  testCase('za');
  testCase('lohi');
  testCase('hilo');
});
