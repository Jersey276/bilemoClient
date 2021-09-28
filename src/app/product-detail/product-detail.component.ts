import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { product } from '../Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product! : product;

  constructor(private auth : AuthService, private http : HttpClient, private route: ActivatedRoute) {
    this.auth.checkAuth(true);
    this.http.get<product>('http://bilemo.tristan-lefevre.com/api/products/'+ this.route.snapshot.params['id'], {headers : this.auth.getHeader()})
    .subscribe(
      (result) => {
        this.product = result;
      }
    )
  }

  ngOnInit(): void {
  }

}
