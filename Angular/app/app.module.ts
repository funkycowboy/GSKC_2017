import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule } from '@angular/http';

//Pipes
import {TextFilterPipe} from './Pipes/text-filter.pipe';
import {EllipsisPipe} from './Pipes/ellipsis';
import {FormsModule} from '@angular/forms';
import {CarouselModule} from 'ng2-bootstrap';
import {SafeHtmlPipe} from './Pipes/safeHtml.pipe'

//Application specific components
import {AppComponent} from './app.component';
import {PublicHeaderComponent} from './Headers/public-header.component'
import {PublicLayoutComponent} from './Layouts/public-layout.component'
import {PublicFooterComponent} from './Footers/public-footer.component'
import {ProductSearchComponent} from './ProductSearch/product-search-component'
import {HomeComponent} from './Content/home.component'
import {HomeCarouselComponent} from './Content/home-carousel.component'
import {CalendarComponent} from './Content/calendar.component'

//Services
import {ProductService} from './Services/product.service'
import {SlideshowService} from './Services/slideshow.service'
import {GoogleCalendarService} from './Services/google-calendar.service'

//Api 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import {MockDataService} from './Api/mock-data'



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(MockDataService),
        FormsModule,
        CarouselModule,
    ],
    declarations: [
        AppComponent,
        PublicHeaderComponent,
        PublicLayoutComponent,
        PublicFooterComponent,
        ProductSearchComponent,
        HomeComponent,
        TextFilterPipe,
        EllipsisPipe,
        SafeHtmlPipe,
        HomeCarouselComponent,
        CalendarComponent
    ],
    providers: [ProductService, SlideshowService, GoogleCalendarService],
    bootstrap: [AppComponent]
})

export class AppModule{}