import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sw';

  constructor(swUpdate: SwUpdate, snackBar: MatSnackBar, swPush: SwPush, http: HttpClient) {
    //swUpdate.checkForUpdate().then

    swUpdate.versionUpdates.
    pipe(filter(
      (event): event is VersionReadyEvent => event.type === 'VERSION_READY'
    ))
    .subscribe(() => {
      // if (confirm("New version available. Load New Version?")) {
      //   window.location.reload();
      // }
      const snack = snackBar.open('New version available', 'Reload');
      snack.onAction().subscribe(() => {
        swUpdate.activateUpdate().then(() => window.location.reload());
      });
    });

    swPush.messages.subscribe((message) => {
      console.log('Push message', message);
    });

    const serverPublicKey = "BCIXQbt6YBfQWqVgy_MZDOSKQ0SHil7eeq0ldaFAO7wIPYS2AJTOA50RJkbEmfkgFjeOKJzOHm4cUyOMktB6G_M"
    swPush.requestSubscription({ serverPublicKey }).then(sub => {
      console.log('Subscription', sub);

      http.post('http://localhost:3000/subscription', sub).subscribe( (res) => 
        { console.log(res) }
      );
    });
  }
}
