import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  foo1 = null;
  foo = {
    aaa: 0,
    foo: 1
  };
  title = 'Tour of Heroes';
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
}
