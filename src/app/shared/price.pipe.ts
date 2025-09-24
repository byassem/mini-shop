import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  transform(value: number, currency: 'FCFA'): string {
    return `${value.toFixed(2)} ${currency}`;
  }
}
