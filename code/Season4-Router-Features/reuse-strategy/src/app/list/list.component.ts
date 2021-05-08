import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book, BookService } from '../book.service';

@Component({
  selector: 'app-list',
  template: `
    <h1> Books from openlibrary.org </h1>
    <ul>
      <li *ngFor="let book of books">
        <a [routerLink]="['/book', book.isbn[0]]">{{book.title| slice:0:40}}</a>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ListComponent implements OnInit, OnDestroy {

  public books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    console.log('ListComponent::ngOnInit')

    this.bookService.getBooks().subscribe((books) => {
      this.books = books
    })
  }

  ngOnDestroy(): void {
    console.log('ListComponent::ngOnDestroy')
  }

}
