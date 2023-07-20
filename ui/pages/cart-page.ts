import { Product } from '@models/products.interface';
import { loc } from '@locators/loc';
import { BasePage } from '@pages/base-page.abstract';

export class CartPage extends BasePage {
  async checkout(): Promise<void> {
    await this.page.locator(loc.cart.button.checkout).click();
  }

  async removeProduct(product: Product): Promise<void> {
    const title = this.page.locator(loc.itemComp.label.productName).getByText(product.title);
    const item = this.page.locator(loc.itemComp.container.product, { has: title });
    const removeBtn = item.locator(loc.cart.button.remove);
    await removeBtn.click();
  }
}
