import { Component, OnInit } from '@angular/core';
import {GoogleCalendarService} from '../Services/google-calendar.service'
import {GoogleAuthenticationService} from '../Services/google-authentication.service'

@Component({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.css']
})

export class CalendarComponent implements OnInit{

events:Object[] = []

constructor(private googleCalendarService: GoogleCalendarService, private googleAuthenticationService: GoogleAuthenticationService){}

    ngOnInit():void {
        this.googleCalendarService.getEvents()
        .then(events => this.events = events);
    }
        
}
