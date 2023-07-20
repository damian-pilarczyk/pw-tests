import { faker } from '@faker-js/faker';
import { allItems } from 'consts/items-titles';

export function getRandomItems(numberOfItems: number): string[] {
  return faker.helpers.arrayElements(allItems, numberOfItems);
}
