import { Product } from '@models/products.interface';
import { BasePage } from '@pages/base-page.abstract';
import { BaseComponent } from '@ui/components/base-component.abstract';
import { dataTestBeginsWith } from 'utils/selectors';

class CartItem extends BaseComponent {
  readonly removeBtn = this.box.locator(dataTestBeginsWith('remove'));
}

export class CartPage extends BasePage {
  readonly cartItem = (title: string) => new CartItem(this.page.locator('.cart_item', { hasText: title }));
  readonly checkoutBtn = this.page.getByTestId('checkout');

  async checkout(): Promise<void> {
    await this.checkoutBtn.click();
  }

  async removeProduct({ title }: Product): Promise<void> {
    await this.cartItem(title).removeBtn.click();
  }
}
