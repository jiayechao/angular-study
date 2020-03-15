import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements AfterViewChecked {
  foo1 = null;
  foo = {
    aaa: 0,
    foo: 1
  };
  private i = 0;

  @ViewChild(MessagesComponent) viewChild: MessagesComponent;
  parentItem = '我是父组件的值哦';
  title = 'Tour of Heroes';
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';

  ngAfterViewChecked() {
    console.log(this.i++, this.parentItem, this.viewChild);
    // 这里的赋值是h会报错的，因为这个钩子是在组装好视图之后才触发的，可以通过tick
    if (this.title === 'Tour of Heroes') {
      setTimeout(() => {
        this.title = 'fafwafawterhr';
      }, 0);
    }
  }

  changeParent(value: string) {
    console.log(value);
    this.parentItem = value;
  }
}
