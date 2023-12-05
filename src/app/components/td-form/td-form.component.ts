import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  login: any = {
    username: '',
    password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  generateUser(myform: NgForm) {
    myform.form.patchValue(
      {
        username: 'your username',
        password: 'your password'
      }
    )
  }

  submit(myForm: NgForm) {
    this.login.username = myForm.value.userInfo.username;
    this.login.password = myForm.value.userInfo.password;
    console.log('User Credentials saved: ', this.login);
  }

}
