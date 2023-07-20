import { Page } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { ProductsPage } from './pages/products-page';

export class Ui {
  constructor(private page: Page) {}

  loginPage = new LoginPage(this.page);
  productsPage = new ProductsPage(this.page);

  async visit(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
