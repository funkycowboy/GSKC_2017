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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var text_filter_pipe_1 = require('./Pipes/text-filter.pipe');
var forms_1 = require('@angular/forms');
//import { Ng2BootstrapModule } from 'ng2-bootstrap';
var app_component_1 = require('./app.component');
var public_header_component_1 = require('./Headers/public-header.component');
var public_layout_component_1 = require('./Layouts/public-layout.component');
var public_footer_component_1 = require('./Footers/public-footer.component');
var product_search_component_1 = require('./ProductSearch/product-search-component');
var home_component_1 = require('./Pages/home.component');
var product_service_1 = require('./Services/product.service');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var mock_data_1 = require('./Api/mock-data');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(mock_data_1.MockDataService),
                forms_1.FormsModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                public_header_component_1.PublicHeaderComponent,
                public_layout_component_1.PublicLayoutComponent,
                public_footer_component_1.PublicFooterComponent,
                product_search_component_1.ProductSearchComponent,
                home_component_1.HomeComponent,
                text_filter_pipe_1.TextFilterPipe
            ],
            providers: [product_service_1.ProductService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map