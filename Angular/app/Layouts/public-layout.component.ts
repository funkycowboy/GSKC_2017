import { Component, OnInit } from '@angular/core';

import {Brand} from '../Objects/brand';
import {ProductService} from '../Services/product.service'

@Component({
    moduleId: module.id,
    selector: 'my-public-layout',
    templateUrl: 'public-layout.component.html',
    styleUrls: ['public-layout.component.css']
})
export class PublicLayoutComponent implements OnInit {

brands:Brand[] = []

constructor(private productService: ProductService){}

ngOnInit(): void{
    this.productService.getBrands()
        .then(brands => this.brands = brands);
}
}
