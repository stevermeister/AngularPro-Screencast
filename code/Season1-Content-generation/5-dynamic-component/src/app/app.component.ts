import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { HostDirective } from './host.directive';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="load()">LOAD</button>

    <hr>
    <div *host></div>
    <hr>
  `,
  styles: []
})
export class AppComponent {

  @ViewChild(HostDirective, { read: ViewContainerRef }) hostView: ViewContainerRef;

  constructor(
private cfr: ComponentFactoryResolver,
private view: ViewContainerRef
  ) {

  }

  async load() {
    const {BannerComponent} = await import('./banner/banner.component');
    const BannerComponentFactory = this.cfr.resolveComponentFactory(BannerComponent);
    // this.view.createComponent(BannerComponentFactory);
    this.hostView.createComponent(BannerComponentFactory);
  }

}
