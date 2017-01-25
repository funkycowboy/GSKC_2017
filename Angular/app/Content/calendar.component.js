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
var google_calendar_service_1 = require('../Services/google-calendar.service');
var CalendarComponent = (function () {
    function CalendarComponent(googleCalendarService) {
        this.googleCalendarService = googleCalendarService;
        this.events = [];
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.googleCalendarService.getEvents()
            .then(function (events) { return _this.events = events; })
            .then(function (response) { return console.log("Event List: " + response); })
            .catch(function (err) { return console.log(err); });
    };
    CalendarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'calendar',
            templateUrl: 'calendar.component.html',
            styleUrls: ['calendar.component.css']
        }), 
        __metadata('design:paramtypes', [google_calendar_service_1.GoogleCalendarService])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map