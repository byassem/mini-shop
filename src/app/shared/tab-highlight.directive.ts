import { Directive, ElementRef, inject, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[TabHighlight]',
  standalone: true,
})
export class TabHighlightDirective implements OnChanges {
  @Input('tagHighlight') tag = '';
  private el = inject(ElementRef);
  private r = inject(Renderer2);

  ngOnChanges() {
    const color = this.tag === 'promo' ? '#ffe9e9' : this.tag === 'new' ? '#e9fff0' : '#eef';
    this.r.setStyle(this.el.nativeElement, 'background', color);
    this.r.setStyle(this.el.nativeElement, 'padding', '2px 6px');
    this.r.setStyle(this.el.nativeElement, 'borderRadius', '999px');
    this.r.setStyle(this.el.nativeElement, 'fontSize', '12px');
  }
}
