import { Injectable } from '@angular/core';
import {IProd, IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  prods: IProd[]=[]
  constructor() { }

  addProd(prodict: IProd){
    console.log("add product");
    this.prods.push(prodict)
  }

}
