/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@models/user.interface';
import { test as baseTest, expect as baseExpect } from '@playwright/test';
import { Ui, getUi } from '@ui/ui';
import { generateLockedOutUser, generateStandardUser } from '@helpers/user-generator';
import { ProductsPage } from '@ui/pages/products-page';
import { SortType } from '@models/sort-type.type';
import { expectProductsOrder } from './expects/order-expects';

type MyFixtures = {
  ui: Ui;
  secondUi: Ui;
  users: {
    standardUser: User;
    lockedOutUser: User;
  };
};

export const test = baseTest.extend<MyFixtures>({
  ui: async ({ page }, use) => {
    await use(getUi(page));
  },
  secondUi: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await use(getUi(page));
  },
  users: async ({}, use) => {
    const standardUser = generateStandardUser();
    const lockedOutUser = generateLockedOutUser();
    await use({ standardUser, lockedOutUser });
  },
});

export const expect = baseExpect.extend({
  async toHaveProductsOrder(page: ProductsPage, sortType: SortType) {
    let pass: boolean;
    const passMessage = `Products order is correct, expected: ${sortType}`;
    const failMessage = `Products order is wrong, expected: ${sortType}`;
    try {
      const products = await page.getProducts();
      expectProductsOrder(products, sortType);
      pass = true;
    } catch (e: any) {
      pass = false;
    }

    return {
      message: pass ? () => passMessage : () => failMessage,
      pass,
      name: 'toHaveOrder',
      expected: sortType,
      actual: pass,
    };
  },
});
