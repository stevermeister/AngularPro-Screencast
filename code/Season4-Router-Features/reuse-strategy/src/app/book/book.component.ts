import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BookDetailed, BookService } from '../book.service';
import { pluck } from 'rxjs/operators'

@Component({
  selector: 'app-book',
  template: `
    <a routerLink="">< Back to list</a>
    <br><br><br>
    <div *ngIf="book">
      <h1>{{book.title}}</h1>
      <h2>{{book.subtitle}}</h2>
      <img [src]="book.cover.medium">
    </div>
    

  `,
  styles: [
  ]
})
export class BookComponent implements OnInit {
  book!: BookDetailed;

  constructor(activatedRoute: ActivatedRoute, bookService: BookService) {
    const ISBN = activatedRoute.snapshot.paramMap.get('bookId');    
    if(ISBN) {
      bookService.getBook(ISBN).subscribe((book) => {
        this.book = book
      })
    }
  }

  ngOnInit(): void {
  }

}
