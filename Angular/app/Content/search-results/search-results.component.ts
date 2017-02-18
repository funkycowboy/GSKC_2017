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

    constructor(private productService: ProductService, private route: ActivatedRoute){
        this.route.queryParams.subscribe(params => {
            this.brand = params["Brand"] == undefined ? '': params["Brand"];
            this.price = params["Price"]  == undefined ? '': params["Brand"];;
            this.category = params["Category"] == undefined ? '': params["Brand"];;

           if(this.brand != "" && this.price != "" && this.category != ""){ 
                this.productService.getProducts()
                    .then(products => this.products = products.filter(x => 
                        this.brand.includes(x.ManufacturerId.toString())
                        //&& this.price.includes(x.ManufacturerId.toString())
                        || this.category.includes(x.CategoryId.toString())
                        ));

            }else{
                 this.productService.getProducts()
                    .then(products => this.products = products);
            }
    }

    // ngOnInit(): void {     
    //     alert("test");           
    //     this.productService.getProducts()
    //         .then(products => this.products = products.filter(x => 
    //             this.brand.includes(x.ManufacturerId.toString())
    //             //&& this.price.includes(x.ManufacturerId.toString())
    //             && this.category.includes(x.CategoryId.toString())));
    // }

}
