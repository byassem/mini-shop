import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { PricePipe } from '../price.pipe';
import { RatingComponent } from '../rating/rating';
import { TabHighlightDirective } from '../tab-highlight.directive';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PricePipe, TabHighlightDirective, RatingComponent],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() add = new EventEmitter<Product>();
  @Output() ratingChange = new EventEmitter<{ id: number; rating: number }>();

  onRate(v: number) {
    this.ratingChange.emit({ id: this.product.id, rating: v });
  }
}
