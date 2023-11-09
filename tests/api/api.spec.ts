import { ReqresUserCreate } from '@models/reqres/reqres-user.interface';
import { APIResponse, expect } from '@playwright/test';
import { test } from '@base/base-api-test';
import { randomReqResUser } from '@helpers/user-generator';

test.describe('Reqres API tests', () => {
  test('Get users', async ({ api }) => {
    const res = await api.user.getUsersList();
    expect(res.status()).toEqual(200);
    await api.user.logUsersWithOddIds(res);
  });

  test('Create user', async ({ api }) => {
    const res = await api.user.createUser(randomReqResUser());
    expect(res.status()).toEqual(201);
    await api.user.verifyUserCreationDateIsToday(res);
  });

  test('Update user', async ({ api }) => {
    const createdUser = randomReqResUser();
    const updatedUser = randomReqResUser();

    const createUser = await api.user.createUser(createdUser);
    const userId = await api.user.getUserIdFromResBody(createUser);
    const updateUser = await api.user.updateUser(userId, updatedUser);
    expect(updateUser.status()).toEqual(200);
    const updatedFromResponse = await api.user.getResponseBody<ReqresUserCreate>(updateUser);
    expect(updatedFromResponse).toMatchObject({ ...updatedUser });
  });

  for (const delay of [0, 3]) {
    test(`Delay: ${delay}`, async ({ api }) => {
      await api.user.verifyGetUserResponseTime(delay);
    });
  }

  test('Get 10 single users', async ({ api }) => {
    const responses: Promise<APIResponse>[] = [];

    for (let i = 1; i < 11; i++) {
      const res = api.user.getUser(i);
      responses.push(res);
    }

    for await (const res of responses) {
      expect(res.status()).toEqual(200);
    }
  });
});
