import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import {Brand} from '../Objects/brand'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
    private productUrl = 'api/brands'

    constructor(private http: Http){}

    getBrands(): Promise<Brand[]>{
        return this.http.get(this.productUrl)
        .toPromise()
        .then(response => response.json().data as Brand[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}