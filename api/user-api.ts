import { ReqresUserCreate } from '@models/reqres/reqres-user.interface';
import { APIRequestContext, APIResponse } from '@playwright/test';

export class UserApi {
  private url = 'users';

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

  async getResponseBody<T>(res: APIResponse): Promise<T> {
    const body = (await res.json()) as T;

    return body;
  }
}
