import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  headers : HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer '+ this.auth.getToken());
  products! : any[];

  constructor(private auth : AuthService, private http : HttpClient) {
    this.auth.checkAuth(true);
    this.http.get<any[]>('http://bilemo.tristan-lefevre.com/api/products', { headers : this.headers})
    .subscribe(
      (result) => {
        this.products = result;
      }, (error) => {
        console.log(error);
      }
    );
   }

  ngOnInit(): void {
  }

}
