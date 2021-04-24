import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  template: `
    <a routerLink="/kakapo" routerLinkActive="active">Kakapo</a>
    <a routerLink="/takahe" routerLinkActive="active">Takahe</a>
    <a routerLink="/fairy-tern" routerLinkActive="active">Fairy Tern</a>
  `,
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}