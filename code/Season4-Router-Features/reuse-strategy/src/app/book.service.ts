import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, switchMap, map, pluck, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


export type Book = {
  author_name: string []
  cover_i: number
  isbn: string []
  title: string
}

export type BookDetailed = {
  cover: {
    small: string, 
    medium: string, 
    large: string
  }
  number_of_pages: number
  publish_date: string
  subtitle: string
  title: string
  url: string
}



@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    const seachAngularQuery = 'https://openlibrary.org/search.json?q=angular&fields=cover_i,title,author_name,name,isbn&limit=15';
    return this.http.get<{docs: Book[]}>(seachAngularQuery)
      .pipe(
        pluck('docs'),
      )
  }

  getBook(ISBN: string): Observable<BookDetailed> {
    const getDetails = `https://openlibrary.org/api/books?format=json&jscmd=data&bibkeys=ISBN:${ISBN}`
    return this.http.get<BookDetailed>(getDetails).pipe(pluck(`ISBN:${ISBN}`))
  }
}
