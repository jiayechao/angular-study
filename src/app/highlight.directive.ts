import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'yellow');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }
  constructor(private el: ElementRef) {}

  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }
}
