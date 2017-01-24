import { Component, OnInit } from '@angular/core';
import {GoogleCalendarService} from '../Services/google-calendar.service'
import {GoogleAuthenticationService} from '../Services/google-authentication.service'

import {Event} from '../Models/event';

@Component({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.css']
})

export class CalendarComponent implements OnInit{

events:Event[] = []

constructor(private googleCalendarService: GoogleCalendarService, private googleAuthenticationService: GoogleAuthenticationService){}

    ngOnInit():void {
        this.googleAuthenticationService.getEvents()
         .then(events => this.events = events)
         .then(response => console.log("Test: " + response))
         .catch(err => console.log(err));

    }
        
}
