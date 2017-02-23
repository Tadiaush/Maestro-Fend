import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:` <h1>Swedbank loan</h1>
            <div class="button-row">           
            <button md-raised-button>User</button>
            <button md-raised-button>Clerk</button>
            </div>
`
})
export class AppComponent {
  title = 'app works!';
}
