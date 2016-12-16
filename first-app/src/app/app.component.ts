import {Component} from '@angular/core';

@Component({ // each compnene must have decorator
  selector: 'app-root',
  // templateUrl: './app.component.html', // each component must have exactly one html template
  template: `
<h1>{{title}}</h1> 
<fa-other></fa-other>
<fa-another>
    <div>
        <h2>Hello!</h2> 
        <p>from app.compoennt.ts</p>
    </div>
</fa-another>
<fa-another>
    <p>Some other content</p>
</fa-another>
`, // alternative to templateUrl
  // styleUrls: ['./app.component.css'] // and may have (must not) multiple css
  styles: [`
        h1{ color:red; }
  `] // alternative to styleUrls
})
export class AppComponent {
  title = 'I changed it!';
}
