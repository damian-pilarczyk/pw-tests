import { test as baseTest } from '@playwright/test';
import { UserApi } from 'api/user-api';

type MyFixtures = {
  userApi: UserApi;
};

export const test = baseTest.extend<MyFixtures>({
  userApi: async ({ request }, use) => {
    await use(new UserApi(request));
  },
});
