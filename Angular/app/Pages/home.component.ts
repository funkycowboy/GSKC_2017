import { Component, OnInit } from '@angular/core';

import {ProductService} from '../Services/product.service'
import {Product} from '../Models/product'

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {  
   
    products:Product[] = []

    constructor(private productService: ProductService){}
 
    ngOnInit(): void {
        
        this.productService.getProducts()
        .then(products => this.products = products);{                  
        }
    }
}
