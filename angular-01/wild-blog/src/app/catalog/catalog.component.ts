import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CatalogService } from './catalog.service';
export interface Product {
  id: number;
  name: string;
  price?: number;
  promo: boolean;
}
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  constructor(private catalogService: CatalogService) {}
  products: Product[] = [
    { id: 1, name: 'Produit A', price: 100, promo: true },
    { id: 2, name: 'Produit B', price: undefined, promo: false },
    { id: 3, name: 'Produit C', price: 50, promo: false },
    { id: 4, name: 'Produit D', price: 200, promo: true },
    { id: 5, name: 'Produit E', price: undefined, promo: true },
    { id: 6, name: 'Produit F', price: 80, promo: false },
  ];

  get productsWithoutPrice(): Product[] {
    return this.catalogService.productArraysWithoutPrice(this.products);
  }

  get productsWithPromotion(): Product[] {
    return this.catalogService.productsArrayWithPromotion(this.products);
  }

  get otherProducts(): Product[] {
    return this.catalogService.otherProductsArray(this.products);
  }
}
