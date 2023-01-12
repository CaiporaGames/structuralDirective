import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({selector: '[tooltip]'})

export class TooltipDirective {

 @Input() tooltip:string = "black";
 @Input() fontColor:string = "black";


  constructor(private el: ElementRef) {}
 
  @HostListener("mouseenter")
  mouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.tooltip
    this.el.nativeElement.style.color = this.fontColor
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.el.nativeElement.style.backgroundColor = "blue"
  }
}