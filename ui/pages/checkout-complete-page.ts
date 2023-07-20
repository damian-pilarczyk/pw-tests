import { expect } from '@playwright/test';
import { loc } from '@ui/locators/loc';
import { BasePage } from '@pages/base-page.abstract';

export class CheckoutCompletePage extends BasePage {
  private expectedHeader = 'Thank you for your order!';
  private expectedText = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';

  async verifyOrderIsConfirmed(): Promise<void> {
    const tickImg = this.page.locator(loc.complete.img.tick);
    const header = this.page.locator(loc.complete.label.completeHeader);
    const text = this.page.locator(loc.complete.label.completeText);

    await expect(tickImg).toBeVisible();
    await expect(header).toHaveText(this.expectedHeader);
    await expect(text).toHaveText(this.expectedText);
  }
}
