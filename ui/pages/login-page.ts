import { User } from '@models/user.interface';
import { loc } from '@ui/locators/loc';
import { BasePage } from '@pages/base-page.abstract';

export class LoginPage extends BasePage {
  async login(user: Pick<User, 'username' | 'password'>): Promise<void> {
    await this.page.locator(loc.login.input.username).type(user.username);
    await this.page.locator(loc.login.input.password).type(user.password);
    await this.page.locator(loc.login.button.login).click();
  }
}
