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
var product_service_1 = require('../Services/product.service');
var PublicLayoutComponent = (function () {
    function PublicLayoutComponent(productService) {
        this.productService = productService;
        this.brands = [];
        this.categories = [];
        this.prices = [];
    }
    PublicLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getBrands()
            .then(function (brands) { return _this.brands = brands; });
        this.productService.getCategories()
            .then(function (categories) { return _this.categories = categories; });
        this.productService.getPrices()
            .then(function (prices) { return _this.prices = prices; });
    };
    PublicLayoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-public-layout',
            templateUrl: 'public-layout.component.html',
            styleUrls: ['public-layout.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], PublicLayoutComponent);
    return PublicLayoutComponent;
}());
exports.PublicLayoutComponent = PublicLayoutComponent;
//# sourceMappingURL=public-layout.component.js.map