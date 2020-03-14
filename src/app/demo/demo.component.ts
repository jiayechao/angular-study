import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.styl']
})
export class DemoComponent implements OnInit {
  submitMessage = '一条信息';
  constructor() { }

  onSubmit(item): void {
    console.log(item);
  }
  ngOnInit(): void {
  }

}
