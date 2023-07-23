import { dateToStringWithoutTime } from '@helpers/convert';
import { ReqresUserCreate, ReqresUserGet, ReqresUserUpdate } from '@models/reqres/reqres-user.interface';
import { APIRequestContext, APIResponse, expect } from '@playwright/test';

export class UserApi {
  private url = 'https://reqres.in/api/users';
  constructor(private request: APIRequestContext) {}

  async getUser(id: number): Promise<APIResponse> {
    return await this.request.get(`${this.url}/${id}`);
  }

  async getUsersList(delay?: number): Promise<APIResponse> {
    const reqUrl = delay ? `${this.url}?delay=${delay}` : this.url;

    return await this.request.get(reqUrl);
  }

  async createUser(user: ReqresUserCreate): Promise<APIResponse> {
    return await this.request.post(this.url, {
      data: user,
    });
  }

  async updateUser(userId: number, user: ReqresUserCreate): Promise<APIResponse> {
    return await this.request.put(`${this.url}/${userId}`, {
      data: user,
    });
  }

  async getUserIdFromResBody(res: APIResponse): Promise<number> {
    const userId = (await this.getResponseBody<Pick<ReqresUserUpdate, 'id'>>(res)).id;

    return userId;
  }

  async getResponseBody<T>(res: APIResponse): Promise<T> {
    const body = (await res.json()) as T;

    return body;
  }

  async logUsersWithOddIds(getRes: APIResponse): Promise<void> {
    const usersWithOddIds = (await this.getResponseBody<{ data: ReqresUserGet[] }>(getRes)).data.filter(
      (user) => user.id % 2 === 1,
    );
    // eslint-disable-next-line no-console
    console.log(usersWithOddIds);
  }

  async verifyUserCreationDateIsToday(createUserRes: APIResponse): Promise<void> {
    const createdAt = (await this.getResponseBody<ReqresUserUpdate>(createUserRes)).createdAt;
    const creationDate = dateToStringWithoutTime(new Date(createdAt));
    const today = dateToStringWithoutTime(new Date());
    expect(creationDate).toEqual(today);
  }

  async verifyGetUserResponseTime(delay: number): Promise<void> {
    const startTime = new Date().getTime();
    await this.getUsersList(delay);
    const endTime = new Date().getTime();
    expect(endTime - startTime).toBeLessThan(1000);
  }
}
