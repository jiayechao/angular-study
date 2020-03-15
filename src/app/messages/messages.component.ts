import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, AfterViewChecked, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.styl'],
  // tslint:disable-next-line: no-inputs-metadata-property
  // inputs: ['inputItem'],
  // tslint:disable-next-line: no-outputs-metadata-property
  outputs: ['emitParentItem'],
})
export class MessagesComponent implements OnChanges, OnInit {
  childItem = '我是被子组件改变了';
  // a = null;
  // @Input() inputItem: string; // 也可以在元数据中写出来
  // tslint:disable-next-line: no-input-rename
  @Input('inputItem') anotherName: string;
  // @Output() emitParentItem = new EventEmitter<string>();
  emitParentItem = new EventEmitter<string>();
  constructor(public messageService: MessageService) { }
  ngOnInit(): void {
  }
  ngOnChanges(changes) {
    // changes是一个对象，里面包含改变的属性，属性有三个值：previousValue，currentValue，firstChange
    console.log(changes);
  }
  changeParentItem(value: string) {
    console.log(value);
    this.emitParentItem.emit(value);
  }
}
