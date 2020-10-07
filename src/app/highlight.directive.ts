import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public el: ElementRef) {
  }

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.highlightColor || '#fed1be');
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
