import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import {Brand} from '../Models/brand'
import {Category} from '../Models/category'
import {Price} from '../Models/price'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
    private productBrandUrl = 'api/brands';
    private productPriceUrl = 'api/prices';
    private productCategoryUrl = 'api/categories';
    

    constructor(private http: Http){}

    getBrands(): Promise<Brand[]>{
        return this.http.get(this.productBrandUrl)
        .toPromise()
        .then(response => response.json().data as Brand[])
        .catch(this.handleError);
    }

    getCategories(): Promise<Category[]>{
        return this.http.get(this.productCategoryUrl)
        .toPromise()
        .then(response => response.json().data as Category[])
        .catch(this.handleError);
    }

     getPrices(): Promise<Price[]>{
        return this.http.get(this.productPriceUrl)
        .toPromise()
        .then(response => response.json().data as Price[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}