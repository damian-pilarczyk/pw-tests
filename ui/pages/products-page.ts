import { Product } from '@models/products.interface';
import { SortType } from '@models/sort-type.type';
import { expect } from '@playwright/test';
import { loc } from '@locators/loc';
import { priceToNumber } from '@helpers/convert';
import { BasePage } from '@pages/base-page.abstract';

export class ProductsPage extends BasePage {
  async addSingleProductToCart(product: Product): Promise<void> {
    const title = this.page.getByText(product.title);
    const item = this.page.locator(loc.product.container, { has: title });
    const addToCartBtn = item.locator(loc.product.button.addToCart);
    await addToCartBtn.click();
  }

  async addToCart(products: Product[]): Promise<void> {
    for (const product of products) {
      await this.addSingleProductToCart(product);
    }
  }

  async sort(sortType: SortType): Promise<void> {
    await this.page.selectOption(loc.product.dropdown.sort, sortType);
  }

  async verifyProductsSorting(sortType: SortType): Promise<void> {
    const products: Product[] = await Promise.all(
      (await this.page.locator(loc.product.container).all()).map(async (p) => ({
        title: await p.locator(loc.itemComp.label.productName).textContent(),
        price: await p.locator(loc.itemComp.label.productPrice).textContent(),
      })),
    );

    switch (sortType) {
      case 'az':
        this.verifyAzOrder(products);
        break;
      case 'za':
        this.verifyZaOrder(products);
        break;
      case 'lohi':
        this.verifyLoHiOrder(products);
        break;
      case 'hilo':
        this.verifyHiLoOrder(products);
        break;
    }
  }

  private verifyLoHiOrder(products: Product[]): void {
    for (let i = 1; i < products.length; i++) {
      const price1 = priceToNumber(products[i - 1].price);
      const price2 = priceToNumber(products[i].price);
      expect(price2).toBeGreaterThanOrEqual(price1);
    }
  }

  private verifyHiLoOrder(products: Product[]): void {
    for (let i = 1; i < products.length; i++) {
      const price1 = priceToNumber(products[i - 1].price);
      const price2 = priceToNumber(products[i].price);
      expect(price2).toBeLessThanOrEqual(price1);
    }
  }

  private verifyAzOrder(products: Product[]): void {
    for (let i = 1; i < products.length; i++) {
      const compare = products[i].title.localeCompare(products[i - 1].title);
      expect(compare).toBeGreaterThanOrEqual(0);
    }
  }

  private verifyZaOrder(products: Product[]): void {
    for (let i = 1; i < products.length; i++) {
      const compare = products[i].title.localeCompare(products[i - 1].title);
      expect(compare).toBeLessThanOrEqual(0);
    }
  }
}
