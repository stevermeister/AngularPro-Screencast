import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {

    if(!route?.data?.preload){
      return of(false);
    }

    return of(true).pipe(delay(5000), switchMap(() => load()));
  }
}
