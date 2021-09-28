import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user! : User;
  url : string = "http://bilemo.tristan-lefevre.com/api/users/";
  constructor(private auth: AuthService, private http: HttpClient,private active: ActivatedRoute, private route:Router) {
    this.auth.checkAuth(true);
    this.http.get<User>(this.url + this.active.snapshot.params['id'] , {headers : auth.getHeader()})
    .subscribe(
      (result) => {
        this.user = result;
      }, () => {
        this.route.navigate(['/users']);
      }
    )
  }

  ngOnInit(): void {
  }

  deleteUser() {
    this.http.delete(this.url + this.user.id, {headers : this.auth.getHeader()}).subscribe(
      () => {
        return this.route.navigate(['/users']);
      },
      () => {
        alert('echec de la supperssion');
      }
    );
  }

}
