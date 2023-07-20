import { Page } from '@playwright/test';
import { TopBar } from './components/topbar-component';
import { CartPage } from './pages/cart-page';
import { CheckoutCompletePage } from './pages/checkout-complete-page';
import { CheckoutOverviewPage } from './pages/checkout-overview-page';
import { LoginPage } from './pages/login-page';
import { ProductsPage } from './pages/products-page';
import { YourInfoPage } from './pages/your-info-page';

export class Ui {
  constructor(private page: Page) {}

  topbar = new TopBar(this.page);
  loginPage = new LoginPage(this.page);
  productsPage = new ProductsPage(this.page);
  cartPage = new CartPage(this.page);
  yourInfoPage = new YourInfoPage(this.page);
  checkoutCompletePage = new CheckoutCompletePage(this.page);
  checkoutOverviewPage = new CheckoutOverviewPage(this.page);

  async visit(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
