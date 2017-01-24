declare var gapi: any;

export class GoogleAuthenticationService {
	// constants
	static clientId = '98287965123-4qhpo587glm3sjk0qlo2ar2bjgojf441.apps.googleusercontent.com';
	static apiKey = 'AIzaSyCnZoOGNxfAJEYKF02lP8liEUkPQMecrjs';
	static scopes = ['https://www.googleapis.com/auth/calendar.readonly'];
	/* 
	 * global application state, so it's OK to keep it as field value of a singleton. alternative would be a 
	 * buitl-in global value store.
	 */
	public isAuthenticated: boolean = false;
	public userName: string;
	public userImageUrl: string;

	constructor(){
		// check the authentication silently
		this.internalAuthenticate(true);
	}


	private internalAuthenticate(immediate: boolean){
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
		 .then(() => this.initializeGoogleCalendarAPI())
		 //.then((response:any) => this.setUserData(response.result.displayName, response.result.image.url))
		 .catch((error:any) => {console.log('authentication failed: ' + error)});
	}

	private proceedAuthentication(immediate:boolean){
		return new Promise((resolve, reject) => {
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
						resolve()
			// 		}
			// 		else {
			// 			this.isAuthenticated = false
			// 			this.setUserData('','');
			// 			reject();
			// 		}
			// 	}
			// 	);
			});
	}

	private initializeGoogleCalendarAPI(){
		return new Promise((resolve, reject) => {
			console.log('initialize Google Calendar API');
			resolve(gapi.client.load('calendar', 'v3'));
		});
	}

	private setUserData(userName: string, userImageUrl: string){
		this.userName = userName;
		this.userImageUrl = userImageUrl;
		console.log('user: ' + this.userName + ', image: ' + this.userImageUrl);
	}
}