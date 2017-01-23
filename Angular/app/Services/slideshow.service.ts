import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Image} from '../Models/file.image';

@Injectable()
export class SlideshowService {

 constructor(private http: Http){}

    private slideshowImageUrl = "api/slideshowImages"

    getSlideshowImages(): Promise<Image[]>{
        return this.http.get(this.slideshowImageUrl)
            .toPromise()
            .then(response => response.json().data as Image[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}