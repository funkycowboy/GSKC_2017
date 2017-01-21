import { Component, OnInit } from '@angular/core';

import {ProductService} from '../Services/product.service'

import {Brand} from '../Models/brand'
import {Category} from '../Models/category'
import {Price} from '../Models/price'

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'product-search',
    templateUrl: 'product-search-component.html',
    styleUrls: ['product-search-component.css']
})
export class ProductSearchComponent implements OnInit{

  brands:Brand[] = []
  categories:Category[] = []
  prices:Price[] = []

  selectedBrands: Brand[] = []
  selectedCategories: Category[] = []
  selectedPrices: Price[] = []

  constructor(private productService: ProductService){}

  ngOnInit(): void{
    
      this.productService.getBrands()        
      .then(brands => this.brands = brands);

      this.productService.getCategories()
      .then(categories => this.categories = categories);

      this.productService.getPrices()
      .then(prices => this.prices = prices);

    }

  addSelected(dataType: string, data: Object): void {    
      let obj:any;
      let objArray:any;
      let objSelectedArray:any;

      switch(dataType){
       
        case "brand":
          obj = (<Brand>data); 
          objArray = this.brands; 
          objSelectedArray = this.selectedBrands;
          break;  
        case "price":
          obj = (<Price>data); 
          objArray = this.prices; 
          objSelectedArray = this.selectedPrices;
          break;                 
        case "category":
          obj = (<Category>data); 
          objArray = this.categories; 
          objSelectedArray = this.selectedCategories;
          break; 
      }    

      obj.selected = true
      objSelectedArray.push(obj);
      objArray.splice(objArray.indexOf(obj), 1);              
    }

  removeSelected(dataType: string, data: Object): void {
    let obj:any;
    let objArray:any;
    let objSelectedArray:any;

    switch(dataType){       
      case "brand":
          obj = (<Brand>data);   
          objArray = this.brands; 
          objSelectedArray = this.selectedBrands;      
          break; 
      case "price":
          obj = (<Price>data);   
          objArray = this.prices; 
          objSelectedArray = this.selectedPrices;      
          break;    
      case "category":
          obj = (<Category>data);   
          objArray = this.categories; 
          objSelectedArray = this.selectedCategories;      
          break;
    }                

    objArray.push(obj);
    objSelectedArray.splice(objSelectedArray.indexOf(obj), 1);    
    objArray.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });   
    
  }

  slideFilterList(){
      var $target = $(event.target);
      $target.parent().find(".button-arrow").toggleClass("open");           
      $target.closest(".filter-header").find(".filter-list-parent").slideToggle('slow', function(){
      });
  };   
}
