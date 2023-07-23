export interface ReqresUserGet {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ReqresUserUpdate {
  id: number;
  createdAt: string;
}

export interface ReqresUserCreate {
  name: string;
  job: string;
}
