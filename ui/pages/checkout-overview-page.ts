import { BasePage } from '@pages/base-page.abstract';

export class CheckoutOverviewPage extends BasePage {
  readonly cartItem = this.page.locator('.cart_item');
  readonly finishBtn = this.page.getByTestId('finish');
  readonly totalLabel = this.page.locator('.summary_subtotal_label');

  async finish(): Promise<void> {
    await this.finishBtn.click();
  }
}
