import { ReqresUserCreate, ReqresUserGet, ReqresUserUpdate } from '@models/reqres/reqres-user.interface';
import { expect } from '@playwright/test';
import { test } from '@base/base-api-test';
import { randomReqResUser } from '@helpers/user-generator';
import { formatDate } from '@helpers/convert';

test.describe('Reqres API tests', () => {
  test('Get users and log with odd IDs', async ({ userApi: api }) => {
    const res = await api.getUsersList();
    expect(res.status()).toEqual(200);
    const users = await api.getResponseBody<ReqresUserGet>(res);
    // eslint-disable-next-line no-console
    console.log(users.data.filter((user) => user.id % 2 === 1));
  });

  test('Create user', async ({ userApi: api }) => {
    const res = await api.createUser(randomReqResUser());
    expect(res.status()).toEqual(201);

    const { createdAt } = await api.getResponseBody<ReqresUserUpdate>(res);
    const creationDate = formatDate(new Date(createdAt));
    const today = formatDate(new Date());
    expect(creationDate).toEqual(today);
  });

  test('Update user', async ({ userApi: api }) => {
    const createdUser = randomReqResUser();
    const updatedUser = randomReqResUser();

    const createUserRes = await api.createUser(createdUser);
    const { id: userId } = await api.getResponseBody<ReqresUserUpdate>(createUserRes);
    const updateUserRes = await api.updateUser(userId, updatedUser);
    const updatedFromResponse = await api.getResponseBody<ReqresUserCreate>(updateUserRes);

    expect(updateUserRes.status()).toEqual(200);
    expect(updatedFromResponse).toMatchObject({ ...updatedUser });
  });

  for (const delay of [0, 3]) {
    test(`Delay: ${delay}`, async ({ userApi: api }) => {
      const expectedDelay = 1000 * delay + 500;

      const startTime = new Date().getTime();
      await api.getUsersList(delay);
      const endTime = new Date().getTime();

      expect(endTime - startTime).toBeLessThan(expectedDelay);
    });
  }

  test('Get 10 single users', async ({ userApi: api }) => {
    const requests = Array.from([...Array(10).keys()], (i) => api.getUser(i + 1));

    for await (const res of requests) {
      expect(res.status()).toEqual(200);
    }
  });
});
