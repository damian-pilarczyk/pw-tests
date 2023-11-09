import { test } from '@base/base-ui-test';
import { expect } from '@playwright/test';

test.describe('Logging in', () => {
  test('User is logged in', async ({ ui, users: { standardUser } }) => {
    await ui.visit('/');
    await ui.loginPage.login(standardUser);
    await expect(ui.loginPage.error).toBeHidden();
  });
});
