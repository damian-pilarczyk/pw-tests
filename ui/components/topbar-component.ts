import { loc } from '@locators/loc';
import { BasePage } from '@pages/base-page.abstract';

export class TopBar extends BasePage {
  async goToCart(): Promise<void> {
    await this.page.locator(loc.topbar.button.cart).click();
  }
}
