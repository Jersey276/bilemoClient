import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    UserDetailComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductListItemComponent,
    UserListItemComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( [
      { path: "", component: HomeComponent},
      { path: "login", component: LoginComponent},
      { path: "users", component: UserListComponent},
      { path: "users/add", component: UserAddComponent},
      { path: "users/:id", component: UserDetailComponent},
      { path: "products", component: ProductListComponent},
      { path: "products/:id", component: ProductDetailComponent},
    ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
