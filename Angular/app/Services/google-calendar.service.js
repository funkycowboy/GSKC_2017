"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var event_1 = require('../Models/event');
var GoogleCalendarService = (function () {
    function GoogleCalendarService() {
    }
    GoogleCalendarService.prototype.getEvents = function () {
        return this.initializeAndLoadEvents();
    };
    GoogleCalendarService.prototype.initializeAndLoadEvents = function () {
        gapi.load('client');
        return new Promise(function (resolve, reject) {
            gapi.client.init({
                'apiKey': GoogleCalendarService.apiKey,
                'discoveryDocs': GoogleCalendarService.discoveryDocs
            }).then(function () {
                var request = gapi.client.calendar.events.list({
                    'calendarId': 'b16nmnt6h8cdg3airc1mnshpe8@group.calendar.google.com',
                    'timeMin': new Date().toISOString(),
                    'singleEvents': true,
                    'orderBy': 'startTime'
                });
                request.execute(function (resp) {
                    var events = [];
                    for (var index in resp.items) {
                        var startDate = resp.items[index].start.dateTime != null ? new Date(resp.items[index].start.dateTime).toLocaleDateString() : resp.items[index].start.date;
                        var endDate = resp.items[index].end.dateTime != null ? new Date(resp.items[index].end.dateTime).toLocaleDateString() : resp.items[index].end.date;
                        var startTime = resp.items[index].start.dateTime != null ? new Date(resp.items[index].start.dateTime).toLocaleTimeString().replace(/:\d+ /, ' ') : "";
                        var endTime = resp.items[index].end.dateTime != null ? new Date(resp.items[index].end.dateTime).toLocaleTimeString().replace(/:\d+ /, ' ') : "";
                        var event_2 = new event_1.Event();
                        event_2.Event = resp.items[index].summary;
                        event_2.StartDate = startDate;
                        event_2.Date = startDate + (endDate != startDate ? " - " + endDate : "");
                        event_2.Time = startTime + ((endTime != "") ? " - " + endTime : "");
                        event_2.Location = resp.items[index].location;
                        if (resp.items[index].description != null) {
                            var calenderInfo = resp.items[index].description.split('\n');
                            event_2.Website = calenderInfo[0].split('=')[1];
                            event_2.Address = calenderInfo[1].split('=')[1];
                            event_2.Details = calenderInfo[2].split('=')[1];
                        }
                        events.push(event_2);
                    }
                    resolve(events);
                });
            });
        });
    };
    ;
    GoogleCalendarService.apiKey = 'AIzaSyCnZoOGNxfAJEYKF02lP8liEUkPQMecrjs';
    GoogleCalendarService.discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
    GoogleCalendarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GoogleCalendarService);
    return GoogleCalendarService;
}());
exports.GoogleCalendarService = GoogleCalendarService;
//# sourceMappingURL=google-calendar.service.js.map