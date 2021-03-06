import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras }  from '@angular/router';

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

  keyWordSearchValue = "";

  brands:Brand[] = []
  categories:Category[] = []
  prices:Price[] = []

  selectedBrands: Brand[] = []
  selectedCategories: Category[] = []
  selectedPrices: Price[] = []

  constructor(private productService: ProductService,  private router: Router){}

  ngOnInit(): void{
    
      this.reloadLists()      

  }

  reloadLists(): void {

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

        obj.Selected = true
        objSelectedArray.push(obj);
        objArray.splice(objArray.indexOf(obj), 1); 
        
        this.updateSearchParams() 
                    
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
    this.sortArray(objArray)      

     this.updateSearchParams(); 
    
  }

  sortArray(objArray: any[]) : void {
      objArray.sort((a: any, b: any) => {
        if (a.Name < b.Name) {
          return -1;
        } else if (a.Name > b.Name) {
          return 1;
        } else {
          return 0;
        }
      }); 
  }

  updateSearchParams(): void {

    let navigationExtras: NavigationExtras = {
                queryParams: {
                    "Brand": this.selectedBrands.map(function(a) {return a.Id;}),
                    "Price": this.selectedPrices.map(function(a) {return a.Id;}), 
                    "Category": this.selectedCategories.map(function(a) {return a.Id;}),
                    "Keyword": this.keyWordSearchValue
                }
            };

      this.router.navigate(['/search'], navigationExtras); 
  }

  searchByKeyword(): void {    
   
        this.clearSelections(this.brands,this.selectedBrands);
        this.clearSelections(this.prices,this.selectedPrices);
        this.clearSelections(this.categories,this.selectedCategories);

        this.updateSearchParams(); 
     
  }

  slideFilterList():void{
      var $target = $(event.target);
      $target.parent().find(".button-arrow").toggleClass("open");           
      $target.closest(".filter-header").find(".filter-list-parent").slideToggle('slow', function(){
      });
  };   

  clearSelections(objArray: any[], objSelectedArray: any[]): void {

      objSelectedArray.forEach(x => 
        {            
          objArray.push(x);
          this.sortArray(objArray)                  
        }     
      )
      objSelectedArray.splice(0, 10);
      
      
  }
}
