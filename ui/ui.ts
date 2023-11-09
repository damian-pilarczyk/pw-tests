import { Page } from '@playwright/test';
import { TopBar } from './components/topbar-component';
import { CartPage } from './pages/cart-page';
import { CheckoutCompletePage } from './pages/checkout-complete-page';
import { CheckoutOverviewPage } from './pages/checkout-overview-page';
import { LoginPage } from './pages/login-page';
import { ProductsPage } from './pages/products-page';
import { YourInfoPage } from './pages/your-info-page';

export interface Ui {
  topbar: TopBar;
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  yourInfoPage: YourInfoPage;
  checkoutCompletePage: CheckoutCompletePage;
  checkoutOverviewPage: CheckoutOverviewPage;

  visit: (url: string) => Promise<void>;
}

export function getUi(page: Page): Ui {
  return {
    topbar: new TopBar(page.locator('#header_container')),
    loginPage: new LoginPage(page),
    productsPage: new ProductsPage(page),
    cartPage: new CartPage(page),
    yourInfoPage: new YourInfoPage(page),
    checkoutCompletePage: new CheckoutCompletePage(page),
    checkoutOverviewPage: new CheckoutOverviewPage(page),

    visit: async (url: string): Promise<void> => {
      await page.goto(url);
    },
  };
}
