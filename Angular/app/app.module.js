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
//Modules
var app_routing_module_1 = require('./app-routing.module');
var ng2_pagination_1 = require('ng2-pagination');
//Pipes
var text_filter_pipe_1 = require('./Pipes/text-filter.pipe');
var ellipsis_1 = require('./Pipes/ellipsis');
var forms_1 = require('@angular/forms');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var safeHtml_pipe_1 = require('./Pipes/safeHtml.pipe');
//Application specific components
var app_component_1 = require('./app.component');
var contact_component_1 = require('./Content/contact/contact.component');
var public_header_component_1 = require('./Headers/public-header.component');
var public_layout_component_1 = require('./Layouts/public-layout.component');
var public_footer_component_1 = require('./Footers/public-footer.component');
var product_search_component_1 = require('./ProductSearch/product-search-component');
var home_component_1 = require('./Content/home/home.component');
var home_carousel_component_1 = require('./Content/home-carousel/home-carousel.component');
var calendar_component_1 = require('./Content/calendar/calendar.component');
var support_component_1 = require('./Content/support/support.component');
var search_results_component_1 = require('./Content/search-results/search-results.component');
//Services
var product_service_1 = require('./Services/product.service');
var slideshow_service_1 = require('./Services/slideshow.service');
var google_calendar_service_1 = require('./Services/google-calendar.service');
//Api 
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var mock_data_1 = require('./Api/mock-data');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ng2_bootstrap_1.AccordionModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                ng2_bootstrap_1.CarouselModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(mock_data_1.MockDataService),
                ng2_pagination_1.Ng2PaginationModule
            ],
            declarations: [
                //Components
                app_component_1.AppComponent,
                calendar_component_1.CalendarComponent,
                contact_component_1.ContactComponent,
                home_carousel_component_1.HomeCarouselComponent,
                home_component_1.HomeComponent,
                public_footer_component_1.PublicFooterComponent,
                public_header_component_1.PublicHeaderComponent,
                public_layout_component_1.PublicLayoutComponent,
                product_search_component_1.ProductSearchComponent,
                support_component_1.SupportComponent,
                search_results_component_1.SearchResultsComponent,
                //Pipes
                ellipsis_1.EllipsisPipe,
                safeHtml_pipe_1.SafeHtmlPipe,
                text_filter_pipe_1.TextFilterPipe
            ],
            providers: [
                google_calendar_service_1.GoogleCalendarService,
                product_service_1.ProductService,
                slideshow_service_1.SlideshowService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map