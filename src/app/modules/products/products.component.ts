import { Component, OnInit } from '@angular/core';
import {IProd} from "../../interfaces";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:IProd[]=[]
  constructor(
    private prodService :ProductsService
  ) { }

  ngOnInit(): void {
    this.getProds()
  }
  getProds(){
    this.products = this.prodService.prods
  }

}
