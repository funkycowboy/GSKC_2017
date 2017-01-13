import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
//import { Ng2BootstrapModule } from 'ng2-bootstrap';

import {AppComponent} from './app.component';
import {PublicHeaderComponent} from './Headers/public-header.component'
import {PublicLayoutComponent} from './Layouts/public-layout.component'
import {ProductService} from './Services/product.service'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import {MockDataService} from './Api/mock-data'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(MockDataService)//,
        //Ng2BootstrapModule.forRoot()
    ],
    declarations: [
        AppComponent,
        PublicHeaderComponent,
        PublicLayoutComponent
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})

export class AppModule{}