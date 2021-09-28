import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : FormControl = new FormControl('');
  password : FormControl = new FormControl('');

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  login() {
    return this.auth.login(this.username.value, this.password.value);
  }

}
