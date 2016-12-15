import {Component} from '@angular/core';

@Component({ // each compnene must have decorator
  selector: 'app-root',
  // templateUrl: './app.component.html', // each component must have exactly one html template
  template: `
      <h1>{{title}}</h1> 
  `, // alternative to templateUrl
  // styleUrls: ['./app.component.css'] // and may have (must not) multiple css
  styles: [`
        h1{ color:red; }
  `] // alternative to styleUrls
})
export class AppComponent {
  title = 'I changed it!';
}
