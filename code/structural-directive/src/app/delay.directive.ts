import { Directive, ElementRef, EmbeddedViewRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit {

  @Input() delay
  @Input() delayHide

  constructor(private view: ViewContainerRef,
    private template: TemplateRef<ElementRef>) {}

  ngOnInit() {
    setTimeout(_ => {
      const view = this.view.createEmbeddedView(this.template);
      setTimeout(_ => {
        view.destroy();
      }, this.delayHide);
    }, this.delay);
  }  

}
