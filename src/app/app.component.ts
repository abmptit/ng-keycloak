import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: 'root',
  template: `
    <app-dashboard></app-dashboard>
  `
})
export class AppComponent {
  title = 'ng-keycloak';
}
