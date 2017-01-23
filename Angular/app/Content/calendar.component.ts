import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../Services/calendar.service'

@Component({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.css']
})

export class CalendarComponent implements OnInit{

events:Object[] = []

constructor(private calendarService: CalendarService){}

    ngOnInit():void {
        this.calendarService.getEvents()
        .then(events => this.events = events);
    }
        
}
