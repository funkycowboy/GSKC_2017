import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

declare var gapi: any;

@Injectable()
export class CalendarService {
        
    getEvents(): Promise<any> {

        return new Promise((resolve, reject) => {

            var request = gapi.client.calendar.events.list({
                'calendarId': 'b16nmnt6h8cdg3airc1mnshpe8@group.calendar.google.com',
                'timeMin': new Date().toISOString(),
                'singleEvents': true,
                'orderBy': 'startTime'
            });

            //var model: any;
            request.execute((resp: any) => {
                
                var events = [];
                
                for (var index in resp.items) {
                    var startDate = resp.items[index].start.dateTime != null ? new Date(resp.items[index].start.dateTime).toLocaleDateString() : resp.items[index].start.date;
                    var endDate = resp.items[index].end.dateTime != null ? new Date(resp.items[index].end.dateTime).toLocaleDateString() : resp.items[index].end.date;
                    var startTime = resp.items[index].start.dateTime != null ? new Date(resp.items[index].start.dateTime).toLocaleTimeString().replace(/:\d+ /, ' ') : "";
                    var endTime = resp.items[index].end.dateTime != null ? new Date(resp.items[index].end.dateTime).toLocaleTimeString().replace(/:\d+ /, ' ') : "";

                    var event = {};
                    (<any>event).Event = resp.items[index].summary;  
                    (<any>event).StartDate = startDate;
                    (<any>event).Date = startDate + (endDate != startDate ? " - " + endDate : "");
                    (<any>event).Time = startTime + ((endTime != "") ? " - " + endTime : "");
                    (<any>event).Location = resp.items[index].location;

                    if (resp.items[index].description != null) {
                        var calenderInfo = resp.items[index].description.split('\n');
                        (<any>event).Website = calenderInfo[0].split('=')[1];
                        (<any>event).Address = calenderInfo[1].split('=')[1];
                        (<any>event).Details = calenderInfo[2].split('=')[1];
                    }

                    events.push(event);
                }
            });

        });
        
        
        // var eventViewModel = function (data) {
        //     var self = this;
        //     self.events = ko.observableArray(data);
        //     self.showHideDetails = function(item, event) {
        //         var $target = $(event.target);
        //         var $container = $target.closest("div.calender-container");

        //         if (!$target.hasClass("open")) {
        //             $container.find(".website,.time,.map").hide("fade");
        //             $container.animate({ height: '84px' }, 1000, function () {
        //                 $container.slideDown("slow");
        //                 });
        //         } else {
        //             $container.prependTo($target.parent());
        //             setTimeout(function () {
        //                 $container.find(".website,.time,.map").fadeIn("slow");
        //                 $container.animate({ height: '346px' }, 1000);     //$(target).height() + 'px'

        //             }, 1000);

        //         }

        //         $target.toggleClass("open");
        //     };
        // };
       
    }

}