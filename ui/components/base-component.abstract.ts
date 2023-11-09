import { Locator } from '@playwright/test';

export abstract class BaseComponent {
  constructor(public box: Locator) {}
}
