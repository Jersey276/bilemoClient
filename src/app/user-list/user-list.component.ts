import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users! : any[];

  constructor(private auth : AuthService , private http : HttpClient) { 
    this.auth.checkAuth(true);
    this.http.get<any[]>('http://bilemo.tristan-lefevre.fr/api/users', {headers : auth.getHeader()})
    .subscribe(
      (result) => {
        this.users = result;
      }
    )
  }

  ngOnInit(): void {
  }

}
