import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  name : UntypedFormControl = new UntypedFormControl('');
  address : UntypedFormControl = new UntypedFormControl('');
  constructor(private auth: AuthService, private route: Router, private http: HttpClient) {
    this.auth.checkAuth(true);
  }

  ngOnInit(): void {
  }

  create() {
    this.http.post<User>('http://bilemo.tristan-lefevre.com/api/users',{ 'name': this.name.value, "address": this.address.value }, {headers: this.auth.getHeader()})
    .subscribe(
      (result) => {
        this.route.navigate(['users/'+result.id])
      },
      () => {
        alert('le nouvel utilisateur n\'a pu être crée')
      }
    );
  }
}
