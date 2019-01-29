import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../fieldconfig';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupconfig: {header: string, signUpFields: Array<FieldConfig>, hideAllDefaults: boolean } = {
      header: "Luo uusi käyttäjätunnus",
      signUpFields: [
        {
        label: 'Username',
        key: 'username',
        required: true,
        type: 'username',
        displayOrder: 1,
      },
      {
        label: 'Password',
        key: 'password',
        required: true,
        type: 'password',
        displayOrder: 3,
      },
      {
        label: 'Email',
        key: 'email',
        required: true,
        type: 'email',
        displayOrder: 2
      }
      ],
      hideAllDefaults: true
    };

  constructor() { }

  ngOnInit() {
  }

}
