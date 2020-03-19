import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildDemoComponent } from '../child-demo/child-demo.component';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.styl']
})
export class DemoComponent implements OnInit, AfterViewInit {
  submitMessage = '一条信息';
  childItem = 6;
  changeFoo = 'fooooooooooooooo';
  edit: () => void;
  @ViewChild(ChildDemoComponent) childComponent: ChildDemoComponent;
  changeFooI(event) {
    this.changeFoo = event.toString();
  }


  ngAfterViewInit() {
    // this.edit = this.childComponent.editFoo;
    this.edit = () => this.childComponent.editFoo
    console.log('---------------', this.edit)
  }
  constructor() { }

  onSubmit(item): void {
    console.log(item);
  }
  ngOnInit(): void {
  }

}
