import { BaseComponent } from './base-component.abstract';

export class TopBar extends BaseComponent {
  readonly cart = this.box.locator('.shopping_cart_link');

  async goToCart(): Promise<void> {
    await this.cart.click();
  }
}
