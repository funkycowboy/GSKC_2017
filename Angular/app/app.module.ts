import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {TextFilterPipe} from './Pipes/text-filter.pipe';
import {FormsModule} from '@angular/forms';
import {CarouselModule} from 'ng2-bootstrap';

import {AppComponent} from './app.component';
import {PublicHeaderComponent} from './Headers/public-header.component'
import {PublicLayoutComponent} from './Layouts/public-layout.component'
import {PublicFooterComponent} from './Footers/public-footer.component'
import {ProductSearchComponent} from './ProductSearch/product-search-component'
import {HomeComponent} from './Pages/home.component'
import {DemoCarouselComponent} from './Pages/demo-carousel.component';

import {ProductService} from './Services/product.service'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import {MockDataService} from './Api/mock-data'



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(MockDataService),
        FormsModule,
        CarouselModule,
        //Ng2BootstrapModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        PublicHeaderComponent,
        PublicLayoutComponent,
        PublicFooterComponent,
        ProductSearchComponent,
        HomeComponent,
        TextFilterPipe,
        DemoCarouselComponent
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})

export class AppModule{}