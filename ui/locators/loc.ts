import { productLoc } from '@locators/for-pages/product-page';
import { loginLoc } from '@locators/for-pages/login-page';
import { topbarLoc } from '@locators/for-components/topbar';
import { cartLoc } from '@locators/for-pages/cart-page';
import { yourInfoLoc } from '@locators/for-pages/your-info-page';
import { itemCompLoc } from '@locators/for-components/item-component';
import { checkoutOverviewLoc } from '@locators/for-pages/checkout-overview-page';
import { checkoutCompleteLoc } from '@locators/for-pages/checkout-complete-page';

export const loc = {
  topbar: topbarLoc,
  login: loginLoc,
  itemComp: itemCompLoc,
  product: productLoc,
  cart: cartLoc,
  yourInfo: yourInfoLoc,
  overview: checkoutOverviewLoc,
  complete: checkoutCompleteLoc,
};
