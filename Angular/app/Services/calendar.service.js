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
require('rxjs/add/operator/toPromise');
var CalendarService = (function () {
    function CalendarService() {
    }
    CalendarService.prototype.getEvents = function () {
        return new Promise(function (resolve, reject) {
            var request = gapi.client.calendar.events.list({
                'calendarId': 'b16nmnt6h8cdg3airc1mnshpe8@group.calendar.google.com',
                'timeMin': new Date().toISOString(),
                'singleEvents': true,
                'orderBy': 'startTime'
            });
            //var model: any;
            request.execute(function (resp) {
                var events = [];
                for (var index in resp.items) {
                    var startDate = resp.items[index].start.dateTime != null ? new Date(resp.items[index].start.dateTime).toLocaleDateString() : resp.items[index].start.date;
                    var endDate = resp.items[index].end.dateTime != null ? new Date(resp.items[index].end.dateTime).toLocaleDateString() : resp.items[index].end.date;
                    var startTime = resp.items[index].start.dateTime != null ? new Date(resp.items[index].start.dateTime).toLocaleTimeString().replace(/:\d+ /, ' ') : "";
                    var endTime = resp.items[index].end.dateTime != null ? new Date(resp.items[index].end.dateTime).toLocaleTimeString().replace(/:\d+ /, ' ') : "";
                    var event = {};
                    event.Event = resp.items[index].summary;
                    event.StartDate = startDate;
                    event.Date = startDate + (endDate != startDate ? " - " + endDate : "");
                    event.Time = startTime + ((endTime != "") ? " - " + endTime : "");
                    event.Location = resp.items[index].location;
                    if (resp.items[index].description != null) {
                        var calenderInfo = resp.items[index].description.split('\n');
                        event.Website = calenderInfo[0].split('=')[1];
                        event.Address = calenderInfo[1].split('=')[1];
                        event.Details = calenderInfo[2].split('=')[1];
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
    };
    CalendarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CalendarService);
    return CalendarService;
}());
exports.CalendarService = CalendarService;
//# sourceMappingURL=calendar.service.js.map