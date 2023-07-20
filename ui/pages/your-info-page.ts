import { User } from '@models/user.interface';
import { loc } from '@locators/loc';
import { BasePage } from '@pages/base-page.abstract';

export class YourInfoPage extends BasePage {
  async fillUserInfo(user: Pick<User, 'firstName' | 'lastName' | 'zip'>): Promise<void> {
    await this.page.locator(loc.yourInfo.input.firstName).type(user.firstName);
    await this.page.locator(loc.yourInfo.input.lastName).type(user.lastName);
    await this.page.locator(loc.yourInfo.input.zip).type(user.zip);
  }

  async continue(): Promise<void> {
    await this.page.locator(loc.yourInfo.button.continue).click();
  }
}
