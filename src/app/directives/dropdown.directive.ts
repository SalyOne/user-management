import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective  implements AfterViewInit{
  isOpen = false;
  @HostListener('click')
  toggleOpen(){
    this.isOpen=!this.isOpen;
    this.elementRef.nativeElement.getElementsByClassName('dropdown__content')[0].classList.toggle('open')
  }
  constructor(
    private elementRef: ElementRef
  ) { }


  @HostListener('document:click',['$event'])
  backdropClick(event:any){
      if (!this.elementRef.nativeElement.contains(event.target)){
        this.elementRef.nativeElement.getElementsByClassName('dropdown__content')[0].classList.remove('open')
      }
  }
  ngAfterViewInit(): void {
    console.log(this.elementRef.nativeElement);
  }

}
