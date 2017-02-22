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
var router_1 = require("@angular/router");
var product_service_1 = require('../../Services/product.service');
var SearchResultsComponent = (function () {
    function SearchResultsComponent(productService, route) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.products = [];
        this.route.queryParams.subscribe(function (params) {
            _this.brand = params["Brand"] == undefined ? '' : params["Brand"];
            _this.price = params["Price"] == undefined ? '' : params["Price"];
            ;
            _this.category = params["Category"] == undefined ? '' : params["Category"];
            _this.keyword = params["Keyword"] == undefined ? '' : params["Keyword"];
            if (_this.brand != "" || _this.price != "" || _this.category != "" || _this.category != "" || _this.keyword != "") {
                _this.productService.getProducts()
                    .then(function (products) { return _this.products = products.filter(function (x) {
                    return _this.brand.includes(x.ManufacturerId.toString())
                        || _this.category.includes(x.CategoryId.toString())
                        || (_this.keyword != '' ? x.Name.toLowerCase().includes(_this.keyword) : null);
                }); })
                    .then(function (p) { return _this.showNotFound = _this.products.length == 0; });
            }
            else {
                _this.productService.getProducts()
                    .then(function (products) { return _this.products = products; })
                    .then(function (products) { return _this.showNotFound = false; });
            }
        });
    }
    SearchResultsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-results',
            templateUrl: 'search-results.component.html',
            styleUrls: ['search-results.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
exports.SearchResultsComponent = SearchResultsComponent;
//# sourceMappingURL=search-results.component.js.map