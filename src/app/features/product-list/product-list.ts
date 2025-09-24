import { Component, signal } from '@angular/core';
import { PRODUCTS } from '../../shared/data/products';
import { ModalComponent } from '../../shared/modal/modal';
import { Product } from '../../shared/models/product';
import { ProductCardComponent } from '../../shared/product-card/product-card';
import { TabsTabComponent } from '../../shared/tabs-tab/tabs-tab';
import { TabsComponent } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductListComponent {
  products = signal<Product[]>(PRODUCTS);
  cart = signal<Product[]>([]);
  modalOpen = signal(false);
  lastAdded = signal<Product | null>(null);

  trackById = (_: number, p: Product) => p.id;

  onAdd(p: Product) {
    this.cart.update((arr) => [...arr, p]);
    this.lastAdded.set(p);
    this.modalOpen.set(true);
  }
  onRatingChange(e: { id: number; rating: number }) {
    this.products.update((list) =>
      list.map((p) => (p.id === e.id ? { ...p, rating: e.rating } : p))
    );
  }
}
