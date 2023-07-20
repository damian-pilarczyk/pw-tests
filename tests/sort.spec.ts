import { test } from '@base/base-ui-test';
import { SortType } from '@models/sort-type.type';

const testCase = (sortType: SortType): void => {
  test(sortType, async ({ ui, standardUser }) => {
    await ui.visit('/');
    await ui.loginPage.login(standardUser);
    await ui.productsPage.sort(sortType);
    await ui.productsPage.verifyProductsSorting(sortType);
  });
};

test.describe('Products sorting', () => {
  testCase('az');
  testCase('za');
  testCase('lohi');
  testCase('hilo');
});
