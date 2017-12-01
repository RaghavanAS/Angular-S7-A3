import { Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @Input() indexVal: number;

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.indexVal);
    if ((this.indexVal + 1) % 2 === 0) {
    this.changeColor('green');
    } else {
    this.changeColor('red');
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black');
  }
  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
