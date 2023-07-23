import { test as baseTest } from '@playwright/test';
import { Api } from 'api/api';

type MyFixtures = {
  api: Api;
};

export const test = baseTest.extend<MyFixtures>({
  api: async ({ request }, use) => {
    await use(new Api(request));
  },
});
