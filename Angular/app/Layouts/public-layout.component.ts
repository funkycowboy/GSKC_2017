import { Component, OnInit } from '@angular/core';

import {Brand} from '../Models/brand'
import {Category} from '../Models/category'
import {Price} from '../Models/price'

import {ProductService} from '../Services/product.service'

@Component({
    moduleId: module.id,
    selector: 'my-public-layout',
    templateUrl: 'public-layout.component.html',
    styleUrls: ['public-layout.component.css']
})
export class PublicLayoutComponent implements OnInit {

brands:Brand[] = []
categories:Category[] = []
prices:Price[] = []

constructor(private productService: ProductService){}

ngOnInit(): void{
    this.productService.getBrands()
        .then(brands => this.brands = brands);

        this.productService.getCategories()
        .then(categories => this.categories = categories);

        this.productService.getPrices()
        .then(prices => this.prices = prices);
    }
}
