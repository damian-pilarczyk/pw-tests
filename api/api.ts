import { APIRequestContext } from '@playwright/test';
import { UserApi } from './user-api';

export class Api {
  constructor(private request: APIRequestContext) {}
  user = new UserApi(this.request);
}
