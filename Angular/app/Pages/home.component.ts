import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements AfterViewChecked{

    ngAfterViewChecked(): void{      
        $('.myCarousel').carousel({
        interval: 2000
        }); 
    }  

}