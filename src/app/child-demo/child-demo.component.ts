import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styles: ['p { font-weight: bold; }', 'button {color: red}']
  // styleUrls: ['./child-demo.component.styl']
})
export class ChildDemoComponent implements OnInit, OnChanges {
  private iName: number;
  i = 0;
  changeLog: string[] = [];
  @Input()
  set name(name: number) {
    this.iName = name;
  }
  get name(): number {
    return this.iName;
  }

  @Input() foo: string;
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    for (const i of Object.keys(changes)) {
      console.log('==================', i);
      this.changeLog.push(i);
    }
    console.log('==================', changes);
  }

  ngOnInit(): void {
  }
  editFoo() {
    console.log(this.i)
    this.childEvent.emit(this.i++);
  }

}
