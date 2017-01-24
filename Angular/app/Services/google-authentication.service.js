"use strict";
var GoogleAuthenticationService = (function () {
    function GoogleAuthenticationService() {
        /*
         * global application state, so it's OK to keep it as field value of a singleton. alternative would be a
         * buitl-in global value store.
         */
        this.isAuthenticated = false;
        // check the authentication silently
        this.internalAuthenticate(true);
    }
    GoogleAuthenticationService.prototype.internalAuthenticate = function (immediate) {
        var _this = this;
        /* heavily use promises here for 2 reasons:
         *
         * nr1: readability (image callback syntax here :( )
         * nr2: ui synchronisation: due to the GAPI, the result is handled in a callback,
         *		angular does therefor not know of any scope changes. since ther is no scope
         *		as in angular1 one cannot manually trigger the scope digest.
         *		Using Promises solves this problem since the scope digest is triggered on
         *		resove() and reject().
         * The callbacks passed to then() are lambdas to ensure the call applies to the correct
         * scope.
         */
        return this.proceedAuthentication(immediate)
            .then(function () { return _this.initializeGoogleCalendarAPI(); })
            .catch(function (error) { console.log('authentication failed: ' + error); });
    };
    GoogleAuthenticationService.prototype.proceedAuthentication = function (immediate) {
        return new Promise(function (resolve, reject) {
            console.log('proceed authentication - immediate: ' + immediate);
            gapi.client.setApiKey(GoogleAuthenticationService.apiKey);
            // var authorizationRequestData =
            // {
            // 	'client_id': GoogleAuthenticationService.clientId, 
            // 	'scope': GoogleAuthenticationService.scopes, 
            // 	'immediate': immediate
            // } 
            // gapi.auth.authorize(authorizationRequestData,
            // 	(authenticationResult) => {
            // 		if(authenticationResult && !authenticationResult.error){
            // 			this.isAuthenticated = true
            // 			this.setUserData('unknown', '');
            resolve();
            // 		}
            // 		else {
            // 			this.isAuthenticated = false
            // 			this.setUserData('','');
            // 			reject();
            // 		}
            // 	}
            // 	);
        });
    };
    GoogleAuthenticationService.prototype.initializeGoogleCalendarAPI = function () {
        return new Promise(function (resolve, reject) {
            console.log('initialize Google Calendar API');
            resolve(gapi.client.load('calendar', 'v3'));
        });
    };
    GoogleAuthenticationService.prototype.setUserData = function (userName, userImageUrl) {
        this.userName = userName;
        this.userImageUrl = userImageUrl;
        console.log('user: ' + this.userName + ', image: ' + this.userImageUrl);
    };
    // constants
    GoogleAuthenticationService.clientId = '98287965123-4qhpo587glm3sjk0qlo2ar2bjgojf441.apps.googleusercontent.com';
    GoogleAuthenticationService.apiKey = 'AIzaSyCnZoOGNxfAJEYKF02lP8liEUkPQMecrjs';
    GoogleAuthenticationService.scopes = ['https://www.googleapis.com/auth/calendar.readonly'];
    return GoogleAuthenticationService;
}());
exports.GoogleAuthenticationService = GoogleAuthenticationService;
//# sourceMappingURL=google-authentication.service.js.map