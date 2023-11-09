import { BasePage } from '@pages/base-page.abstract';

export class CheckoutCompletePage extends BasePage {
  readonly tickImg = this.page.locator('[alt="Pony Express"]');
  readonly header = this.page.locator('.complete-header');
  readonly completeText = this.page.locator('.complete-text');
}
