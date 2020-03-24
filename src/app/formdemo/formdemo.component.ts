import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.styl']
})
export class FormdemoComponent implements OnInit {
  name = new FormControl('', Validators.required);

  fullname = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  onSubmit() {
    console.log(this.fullname.value)
  }
  constructor() { }

  updateName() {
    this.name.setValue('我改变了');
  }
  ngOnInit(): void {
  }

}
