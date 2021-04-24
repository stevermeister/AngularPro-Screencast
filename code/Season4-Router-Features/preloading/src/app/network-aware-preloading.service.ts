import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkAwarePreloadingService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const connection = (<any>window).navigator.connection;

    // returns true if the user has set a reduced data usage option on the user agent.
    if (connection.saveData) {
      return of(null);
    }
    
    // one of 'slow-2g', '2g', '3g', or '4g'
    const speed = connection.effectiveType;
    const slowConnections = ['slow-2g', '2g', '3g'];
    if (slowConnections.includes(speed)) {
      return of(null);
    }
    
    return load();
  }
}
