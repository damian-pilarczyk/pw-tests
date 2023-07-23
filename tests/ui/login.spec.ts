import { test } from '@base/base-ui-test';

test.describe('Logging in', () => {
  test('User is logged in', async ({ ui, lockedOutUser }) => {
    await ui.visit('/');
    await ui.loginPage.login(lockedOutUser);
    await ui.loginPage.verifyUserIsLoggedIn();
  });
});
