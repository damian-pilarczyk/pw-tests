import { Product } from '@models/products.interface';
import { SortType } from '@models/sort-type.type';
import { BasePage } from '@pages/base-page.abstract';
import { BaseComponent } from '@ui/components/base-component.abstract';
import { dataTest, dataTestBeginsWith } from 'utils/selectors';

class ItemComponent extends BaseComponent {
  readonly name = this.box.locator('.inventory_item_name');
  readonly price = this.box.locator('.inventory_item_price');
  readonly addToCartBtn = this.box.locator(dataTestBeginsWith('add-to-cart'));
}

export class ProductsPage extends BasePage {
  readonly itemComponentLoc = this.page.locator('.inventory_item');
  readonly itemComponent = (name: string) => new ItemComponent(this.itemComponentLoc.filter({ hasText: name }));

  async addSingleProductToCart({ title }: Product): Promise<void> {
    await this.itemComponent(title).addToCartBtn.click();
  }

  async addToCart(products: Product[]): Promise<void> {
    for (const product of products) {
      await this.addSingleProductToCart(product);
    }
  }

  async sort(sortType: SortType): Promise<void> {
    await this.page.selectOption(dataTest('product_sort_container'), sortType);
  }

  async getProducts(): Promise<Product[]> {
    const products: Product[] = await Promise.all(
      (await this.itemComponentLoc.all()).map(async (p) => {
        const itemComp = new ItemComponent(p);
        return {
          title: await itemComp.name.textContent(),
          price: await itemComp.price.textContent(),
        };
      }),
    );

    return products;
  }
}
