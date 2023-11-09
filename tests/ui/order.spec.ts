import { test } from '@base/base-ui-test';
import { getRandomItems } from '@helpers/random';
import { expect } from '@playwright/test';

test.describe('Order product', () => {
  test('Order after removing one product from the cart', async ({ ui, users: { standardUser } }) => {
    const expectedHeader = 'Thank you for your order!';
    const expectedText = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';
    const items = getRandomItems(2);
    await ui.visit('/');
    await ui.loginPage.login(standardUser);
    await ui.productsPage.addToCart(items);
    await ui.topbar.goToCart();
    await ui.cartPage.removeProduct(items[1]);
    await ui.cartPage.checkout();
    await ui.yourInfoPage.fillUserInfo(standardUser);
    await ui.yourInfoPage.continue();
    await expect(ui.checkoutOverviewPage.cartItem).toHaveCount(1);
    await expect(ui.checkoutOverviewPage.totalLabel).toHaveText(`Item total: ${items[0].price}`);
    await ui.checkoutOverviewPage.finish();
    await expect(ui.checkoutCompletePage.tickImg).toBeVisible();
    await expect(ui.checkoutCompletePage.header).toHaveText(expectedHeader);
    await expect(ui.checkoutCompletePage.completeText).toHaveText(expectedText);
  });
});
