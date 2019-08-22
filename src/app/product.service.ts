import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class ProductService {
    url = 'http://localhost:3000/';
    constructor(private http: HttpClient) {}

    onLoad() {
        return this.http.get(this.url);
    }
}
