import { loc } from '@ui/locators/loc';
import { BasePage } from './base-page.abstract';

export class ProductsPage extends BasePage {
  async addSingleItemToCart(product: string): Promise<void> {
    const title = this.page.getByText(product);
    const item = this.page.locator(loc.item.container, { has: title });
    const addToCartBtn = item.locator(loc.item.button.addToCart);
    await addToCartBtn.click();
  }

  async addToCart(products: string[]): Promise<void> {
    for (const product of products) {
      await this.addSingleItemToCart(product);
    }
  }
}
