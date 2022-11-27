import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {ButtonModule} from "../../components/button/button.module";
import {ProductsService} from "../../services/products.service";
import {RouterModule} from "@angular/router";
import {UserService} from "../../services/user.service";



@NgModule({
  declarations: [
    ProductsComponent,
    AddProductsComponent,
    ProductItemComponent
  ],
  exports: [
    ProductsComponent
  ],
  providers:[ProductsService],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      }
    ]),
  ]
})
export class ProductsModule { }
