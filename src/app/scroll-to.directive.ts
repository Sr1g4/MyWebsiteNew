// scroll-to.directive.ts
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input()
    appScrollTo!: string;

  constructor() {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    const element = document.querySelector(this.appScrollTo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
