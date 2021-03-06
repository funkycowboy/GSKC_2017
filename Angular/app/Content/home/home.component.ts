import { Component, OnInit } from '@angular/core';

import {ProductService} from '../../Services/product.service'
import {SlideshowService} from '../../Services/slideshow.service'

import {Product} from '../../Models/product'
import {Image} from '../../Models/file.image'

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {  

    products:Product[] = []
    slideshowImages:Image[] = []

    constructor(private productService: ProductService, private slideshowService: SlideshowService){}
 
    ngOnInit(): void {

        this.productService.getProducts()
        .then(products => this.products = products.splice(0,2));

        this.slideshowService.getSlideshowImages()
        .then(images => this.slideshowImages = images);
    }
}
