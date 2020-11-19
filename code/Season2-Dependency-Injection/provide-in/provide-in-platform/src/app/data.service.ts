import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'platform'
  //providedIn: 'root'
})
export class DataService {

  private dataSource$$ = new BehaviorSubject<number>(1);

  public getData$() {
    return this.dataSource$$.asObservable();
  }

  public setData(data:number) {
    this.dataSource$$.next(data);
  }

}