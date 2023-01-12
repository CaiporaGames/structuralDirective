import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[delayRendering]"
})
export class DelayRenderingDirective {
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  @Input() delayRendering: number = 0;

  ngOnInit() {
    setTimeout(() => {
      this.container.createEmbeddedView(this.template);
    }, this.delayRendering);
  }
}
