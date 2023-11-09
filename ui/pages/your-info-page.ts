import { User } from '@models/user.interface';
import { BasePage } from '@pages/base-page.abstract';

export class YourInfoPage extends BasePage {
  readonly firstNameInput = this.page.getByTestId('firstName');
  readonly lastNameInput = this.page.getByTestId('lastName');
  readonly zipInput = this.page.getByTestId('postalCode');
  readonly continueBtn = this.page.getByTestId('continue');

  async fillUserInfo({ firstName, lastName, zip }: User): Promise<void> {
    await this.firstNameInput.type(firstName);
    await this.lastNameInput.type(lastName);
    await this.zipInput.type(zip);
  }

  async continue(): Promise<void> {
    await this.continueBtn.click();
  }
}
