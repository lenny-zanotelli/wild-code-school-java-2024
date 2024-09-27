import { Injectable } from '@angular/core';
import { Product } from './catalog.component';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  public productArraysWithoutPrice(products: Product[]): Product[] {
    return products.filter((product) => product.price === undefined);
  }
  public productsArrayWithPromotion(products: Product[]): Product[] {
    return products.filter((product) => product.promo);
  }

  public otherProductsArray(products: Product[]) {
    return products.filter(
      (product) => product.price != undefined && !product.promo
    );
  }
}
