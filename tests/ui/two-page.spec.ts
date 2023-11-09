import { test } from '@base/base-ui-test';

test.describe('Two pages', () => {
  test('Two pages', async ({
    ui: { visit, loginPage },
    secondUi: { visit: visit2, loginPage: loginPage2 },
    users: { standardUser, lockedOutUser },
  }) => {
    await visit('/');
    await loginPage.login(standardUser);

    await visit2('/');
    await loginPage2.login(lockedOutUser);
  });
});
