import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ProductService} from '../../Services/product.service'

import {Product} from '../../Models/product'

@Component({
    moduleId: module.id,
    selector: 'search-results',
    templateUrl: 'search-results.component.html',
    styleUrls: ['search-results.component.css']
})
export class SearchResultsComponent {

    products:Product[] = []

    public brand: string;
    public price: string;
    public category: string;
    public keyword: string;
    public showNotFound: boolean;

    constructor(private productService: ProductService, private route: ActivatedRoute){

        this.route.queryParams.subscribe(params => {

            this.brand = params["Brand"] == undefined ? '': params["Brand"];
            this.price = params["Price"]  == undefined ? '': params["Price"];;
            this.category = params["Category"] == undefined ? '': params["Category"];
            this.keyword = params["Keyword"] == undefined ? '': params["Keyword"];

           if(this.brand != "" || this.price != "" || this.category != "" || this.category != "" || this.keyword != ""){ 
                this.productService.getProducts()
                    .then(products => this.products = products.filter(x => 
                        this.brand.includes(x.ManufacturerId.toString())
                        //&& this.price.includes(x.ManufacturerId.toString())
                        || this.category.includes(x.CategoryId.toString())
                        || (this.keyword != '' ? x.Name.toLowerCase().includes(this.keyword) : null)
                        ))
                    .then(p => this.showNotFound = this.products.length == 0)
                    

            }else{               

                this.productService.getProducts()
                    .then(products => this.products = products)
                    .then(products => this.showNotFound = false)
            }
        });
    
    }
}
