"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var product_service_1 = require('../Services/product.service');
var ProductSearchComponent = (function () {
    function ProductSearchComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.keyWordSearchValue = "";
        this.brands = [];
        this.categories = [];
        this.prices = [];
        this.selectedBrands = [];
        this.selectedCategories = [];
        this.selectedPrices = [];
    }
    ProductSearchComponent.prototype.ngOnInit = function () {
        this.reloadLists();
    };
    ProductSearchComponent.prototype.reloadLists = function () {
        var _this = this;
        this.productService.getBrands()
            .then(function (brands) { return _this.brands = brands; });
        this.productService.getCategories()
            .then(function (categories) { return _this.categories = categories; });
        this.productService.getPrices()
            .then(function (prices) { return _this.prices = prices; });
    };
    ProductSearchComponent.prototype.addSelected = function (dataType, data) {
        var obj;
        var objArray;
        var objSelectedArray;
        switch (dataType) {
            case "brand":
                obj = data;
                objArray = this.brands;
                objSelectedArray = this.selectedBrands;
                break;
            case "price":
                obj = data;
                objArray = this.prices;
                objSelectedArray = this.selectedPrices;
                break;
            case "category":
                obj = data;
                objArray = this.categories;
                objSelectedArray = this.selectedCategories;
                break;
        }
        obj.Selected = true;
        objSelectedArray.push(obj);
        objArray.splice(objArray.indexOf(obj), 1);
        this.updateParams();
    };
    ProductSearchComponent.prototype.removeSelected = function (dataType, data) {
        var obj;
        var objArray;
        var objSelectedArray;
        switch (dataType) {
            case "brand":
                obj = data;
                objArray = this.brands;
                objSelectedArray = this.selectedBrands;
                break;
            case "price":
                obj = data;
                objArray = this.prices;
                objSelectedArray = this.selectedPrices;
                break;
            case "category":
                obj = data;
                objArray = this.categories;
                objSelectedArray = this.selectedCategories;
                break;
        }
        objArray.push(obj);
        objSelectedArray.splice(objSelectedArray.indexOf(obj), 1);
        this.sortArray(objArray);
        this.updateParams();
    };
    ProductSearchComponent.prototype.sortArray = function (objArray) {
        objArray.sort(function (a, b) {
            if (a.Name < b.Name) {
                return -1;
            }
            else if (a.Name > b.Name) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    ProductSearchComponent.prototype.updateParams = function () {
        var navigationExtras = {
            queryParams: {
                "Brand": this.selectedBrands.map(function (a) { return a.Id; }),
                "Price": this.selectedPrices.map(function (a) { return a.Id; }),
                "Category": this.selectedCategories.map(function (a) { return a.Id; })
            }
        };
        this.router.navigate(['/search'], navigationExtras);
    };
    ProductSearchComponent.prototype.searchByKeyword = function () {
        this.clearSelections(this.brands, this.selectedBrands);
        this.clearSelections(this.prices, this.selectedPrices);
        this.clearSelections(this.categories, this.selectedCategories);
        var navigationExtras = {
            queryParams: {
                "Brand": "",
                "Price": "",
                "Category": "",
                "Keyword": this.keyWordSearchValue
            }
        };
        this.router.navigate(['/search'], navigationExtras);
    };
    ProductSearchComponent.prototype.slideFilterList = function () {
        var $target = $(event.target);
        $target.parent().find(".button-arrow").toggleClass("open");
        $target.closest(".filter-header").find(".filter-list-parent").slideToggle('slow', function () {
        });
    };
    ;
    ProductSearchComponent.prototype.clearSelections = function (objArray, objSelectedArray) {
        var _this = this;
        objSelectedArray.forEach(function (x) {
            objArray.push(x);
            _this.sortArray(objArray);
        });
        objSelectedArray.splice(0, 10);
    };
    ProductSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-search',
            templateUrl: 'product-search-component.html',
            styleUrls: ['product-search-component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());
exports.ProductSearchComponent = ProductSearchComponent;
//# sourceMappingURL=product-search-component.js.map