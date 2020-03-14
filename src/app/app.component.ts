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
  parentItem = '我是父组件的值哦';
  title = 'Tour of Heroes';
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';

  changeParent(value: string) {
    console.log(value);
    this.parentItem = value;
  }
}
