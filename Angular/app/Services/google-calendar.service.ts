import {Injectable} from '@angular/core';

import {Event} from '../Models/event';

declare var gapi: any;

@Injectable() 
export class GoogleCalendarService {

	static apiKey = 'AIzaSyCnZoOGNxfAJEYKF02lP8liEUkPQMecrjs';
	static discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];	
	

	constructor(){}

	getEvents():Promise<Event[]>{
		return this.initializeAndLoadEvents();
	}

	private initializeAndLoadEvents() {

		gapi.load('client');

		return new Promise((resolve, reject) => {

			gapi.client.init({

				'apiKey': GoogleCalendarService.apiKey,
				'discoveryDocs': GoogleCalendarService.discoveryDocs	

			}).then(function() {
				
					var request = gapi.client.calendar.events.list({
						'calendarId': 'b16nmnt6h8cdg3airc1mnshpe8@group.calendar.google.com',
						'timeMin': new Date().toISOString(),
						'singleEvents': true,
						'orderBy': 'startTime'
					});

					request.execute((resp: any) => {
						
						let events: Event[] = [];
						
						for (var index in resp.items) {
							var startDate = resp.items[index].start.dateTime != null ? new Date(resp.items[index].start.dateTime).toLocaleDateString() : resp.items[index].start.date;
							var endDate = resp.items[index].end.dateTime != null ? new Date(resp.items[index].end.dateTime).toLocaleDateString() : resp.items[index].end.date;
							var startTime = resp.items[index].start.dateTime != null ? new Date(resp.items[index].start.dateTime).toLocaleTimeString().replace(/:\d+ /, ' ') : "";
							var endTime = resp.items[index].end.dateTime != null ? new Date(resp.items[index].end.dateTime).toLocaleTimeString().replace(/:\d+ /, ' ') : "";

							let event: Event = new Event(); 
							event.Event = resp.items[index].summary;  
							event.StartDate = startDate; 
							event.Date = startDate + (endDate != startDate ? " - " + endDate : "");
							event.Time = startTime + ((endTime != "") ? " - " + endTime : "");
							event.Location = resp.items[index].location;

							if (resp.items[index].description != null) {
								var calenderInfo = resp.items[index].description.split('\n');
								event.Website = calenderInfo[0].split('=')[1];
								//event.Address = calenderInfo[1].split('=')[1];
								event.Address = "http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=" + calenderInfo[1].split('=')[1] +"&ie=UTF8&z=15&t=m&iwloc=near&output=embed"
								event.Details = calenderInfo[2].split('=')[1];
							}

							events.push(event);							
						}

						resolve(events)
				});				       
			})			
		});
	};	
}