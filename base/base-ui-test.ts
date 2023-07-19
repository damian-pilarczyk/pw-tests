import { User } from '@models/user.interface';
import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@ui/pages/login-page';
import { generateStandardUser } from 'helpers/user-generator';

type MyFixtures = {
  loginPage: LoginPage;
  standardUser: User;
  lockedOutUser: User;
};

export const test = baseTest.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  standardUser: async ({}, use) => {
    const user = generateStandardUser();
    await use(user);
  },
  lockedOutUser: async ({}, use) => {
    const user = generateStandardUser();
    await use(user);
  },
});
