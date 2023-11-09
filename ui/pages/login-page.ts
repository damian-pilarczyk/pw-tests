import { User } from '@models/user.interface';
import { BasePage } from '@pages/base-page.abstract';

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.getByTestId('username');
  readonly passwordInput = this.page.getByTestId('password');
  readonly loginBtn = this.page.getByTestId('login-button');
  readonly error = this.page.getByTestId('error');

  async login({ username, password }: User): Promise<void> {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.loginBtn.click();
  }
}
