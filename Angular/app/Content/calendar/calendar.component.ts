import { Component, OnInit } from '@angular/core';
import {GoogleCalendarService} from '../../Services/google-calendar.service'

import {Event} from '../../Models/event';


declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.css']
})

export class CalendarComponent implements OnInit{

events:Event[] = []

constructor(private googleCalendarService: GoogleCalendarService){}

    ngOnInit():void {
        this.googleCalendarService.getEvents()
         .then(events => this.events = events)
         .then(response => console.log("Event List: " + response))
         .catch(err => console.log(err));

    }

    showHideDetails(): void {
        var $target = $(event.target);
        var $container = $target.closest("div.calender-container");

        if (!$target.hasClass("open")) {
            $container.find(".website,.time,.map").hide("fade");
            $container.animate({ height: '84px' }, 500, function () {
                $container.slideDown("slow");
                });
        } else {
            $container.prependTo($target.parent().parent());
            setTimeout(function () {
                $container.find(".website,.time,.map").fadeIn("slow");
                $container.animate({ height: '346px' }, 500);     //$(target).height() + 'px'

            }, 500);

        }

        $target.toggleClass("open");
    };
        
}
