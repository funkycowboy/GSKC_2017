import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Pipes
import {TextFilterPipe} from './Pipes/text-filter.pipe';
import {EllipsisPipe} from './Pipes/ellipsis';
import {FormsModule} from '@angular/forms';
import {CarouselModule} from 'ng2-bootstrap';
import {SafeHtmlPipe} from './Pipes/safeHtml.pipe'

//Application specific components
import {AppComponent} from './app.component'
import {ContactComponent} from './Content/contact.component'
import {PublicHeaderComponent} from './Headers/public-header.component'
import {PublicLayoutComponent} from './Layouts/public-layout.component'
import {PublicFooterComponent} from './Footers/public-footer.component'
import {ProductSearchComponent} from './ProductSearch/product-search-component'
import {HomeComponent} from './Content/home.component'
import {HomeCarouselComponent} from './Content/home-carousel.component'
import {CalendarComponent} from './Content/calendar.component'
import {SupportComponent} from './Content/support.component'

//Services
import {ProductService} from './Services/product.service'
import {SlideshowService} from './Services/slideshow.service'
import {GoogleCalendarService} from './Services/google-calendar.service'

//Api 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import {MockDataService} from './Api/mock-data'


const appRoutes: Routes = [
    
    {   path: 'home',
        component: HomeComponent
    }, 
    {   path: 'support',
        component: SupportComponent
    },
    {   path: 'contact-us',
        component: ContactComponent
    },   
    {   path: '', 
        redirectTo: '/home',
        pathMatch: 'full'
    },

]


@NgModule({
    imports: [
        BrowserModule,
        CarouselModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(MockDataService),
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        //Components
        AppComponent,
        CalendarComponent,
        ContactComponent,
        HomeCarouselComponent,
        HomeComponent,
        PublicFooterComponent,
        PublicHeaderComponent,
        PublicLayoutComponent,
        ProductSearchComponent,
        SupportComponent,
        //Pipes
        EllipsisPipe,
        SafeHtmlPipe,
        TextFilterPipe           
    ],
    providers: [
        GoogleCalendarService,
        ProductService, 
        SlideshowService
    ],
    bootstrap: [AppComponent]
})

export class AppModule{}