import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {PublicLayoutComponent} from './Layouts/public-layout.component'
import {ProductService} from './Services/product.service'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import {MockDataService} from './Services/mock-data'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(MockDataService)
    ],
    declarations: [
        AppComponent,
        PublicLayoutComponent
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})

export class AppModule{}