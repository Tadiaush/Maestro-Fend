import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  name="First name";
  lastName="Last name";
  personalID='Personal ID'
  documentNumber = 'Document number'
  streetName= 'Street name'
  telephoneNumber1='Telephone number 1'
  telephoneNumber2='Telephone number 2'
  email='Email'



  ngOnInit() {
  }
}
