import { expect } from '@playwright/test';
import { loc } from '@ui/locators/loc';
import { BasePage } from '@pages/base-page.abstract';

export class CheckoutOverviewPage extends BasePage {
  async finish(): Promise<void> {
    await this.page.locator(loc.overview.button.finish).click();
  }

  async verifyNumberOfItems(expectedNumber: number): Promise<void> {
    const actualNumber = await this.page.locator(loc.itemComp.container.product).count();
    expect(actualNumber).toEqual(expectedNumber);
  }

  async verifyItemTotal(expectedTotal: string): Promise<void> {
    const actualTotal = (await this.page.locator(loc.overview.label.itemTotal).textContent()).split(' ').pop();
    expect(actualTotal).toEqual(expectedTotal);
  }
}
