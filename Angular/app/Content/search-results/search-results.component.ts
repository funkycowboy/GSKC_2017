import { Component, OnInit } from '@angular/core';

import {ProductService} from '../../Services/product.service'

import {Product} from '../../Models/product'

@Component({
    moduleId: module.id,
    selector: 'search-results',
    templateUrl: 'search-results.component.html',
    styleUrls: ['search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

    products:Product[] = []

    constructor(private productService: ProductService){}

    ngOnInit(): void {
        this.productService.getProducts()
            .then(products => this.products = products);
    }

}
