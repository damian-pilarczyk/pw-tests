import { test } from '@base/base-ui-test';
import { getRandomItems } from '@helpers/random';

test.describe('Order product', () => {
  test('Order after removing one product from the cart', async ({ ui, standardUser }) => {
    const items = getRandomItems(2);
    await ui.visit('/');
    await ui.loginPage.login(standardUser);
    await ui.productsPage.addToCart(items);
    await ui.topbar.goToCart();
    await ui.cartPage.removeProduct(items[1]);
    await ui.cartPage.checkout();
    await ui.yourInfoPage.fillUserInfo(standardUser);
    await ui.yourInfoPage.continue();
    await ui.checkoutOverviewPage.verifyNumberOfItems(1);
    await ui.checkoutOverviewPage.verifyItemTotal(items[0].price);
    await ui.checkoutOverviewPage.finish();
    await ui.checkoutCompletePage.verifyOrderIsConfirmed();
  });
});
