import { AfterContentInit, Component, ContentChildren, ElementRef, Host, QueryList, Renderer2, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';
import { CarouselItemDirective } from '../carousel-item.directive';
import { InnerLogicService } from './inner-logic.service';

@Component({
  selector: 'carousel',
  template: `
  <button (click)="cursor = cursor-1; update()" [disabled]=" cursor - 1 < 0">previous</button>
  <button (click)="cursor = cursor+1; update()" [disabled]=" cursor + 1 > nodes.length">next</button>`,
  providers: [ InnerLogicService ]
})
export class CarouselComponent implements AfterContentInit {

  private embeddedView: ViewRef;
  public nodes: TemplateRef<HTMLElement>[] = [];
  public cursor = 0;

  @ContentChildren(CarouselItemDirective, { read: TemplateRef }) elements: QueryList<TemplateRef<HTMLElement>>

  constructor( private view: ViewContainerRef, private innerLogic: InnerLogicService ) { }

  ngAfterContentInit() {
    this.nodes = this.elements.toArray();
    setInterval(_ => {
      this.cursor = (this.cursor + 1) % this.nodes.length;
      this.update();
    }, this.innerLogic.timer);
    console.log(this.innerLogic.timer);
    
  }

  update() {
    this.embeddedView && this.embeddedView.destroy();
    this.embeddedView = this.view.createEmbeddedView(this.nodes[ this.cursor ]);
  }

}
