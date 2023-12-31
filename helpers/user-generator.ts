import { User } from '@models/user.interface';
import { faker } from '@faker-js/faker';
import { ReqresUserCreate } from '@models/reqres/reqres-user.interface';

function generateUser(username: string, password: string): User {
  return {
    username,
    password,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zip: faker.location.zipCode(),
  };
}

export function generateStandardUser(): User {
  return generateUser(process.env.USER_STANDARD_USERNAME, process.env.USER_STANDARD_PASSWORD);
}

export function generateLockedOutUser(): User {
  return generateUser(process.env.USER_LOCKED_OUT_USERNAME, process.env.USER_LOCKED_OUT_PASSWORD);
}

export function randomReqResUser(): ReqresUserCreate {
  return {
    name: faker.person.firstName(),
    job: faker.person.jobTitle(),
  };
}
