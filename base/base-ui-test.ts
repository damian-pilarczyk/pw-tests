import { User } from '@models/user.interface';
import { test as baseTest } from '@playwright/test';
import { Ui } from '@ui/ui';
import { generateStandardUser } from '@helpers/user-generator';

type MyFixtures = {
  ui: Ui;
  standardUser: User;
  lockedOutUser: User;
};

export const test = baseTest.extend<MyFixtures>({
  ui: async ({ page }, use) => {
    await use(new Ui(page));
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
