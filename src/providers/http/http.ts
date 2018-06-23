import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');

  }

  loginUser (email: string, password: string): Observable<any>{
    return this.http.get('https://fathomless-gorge-56842.herokuapp.com/')
  };
  registerUser (email: string, password: string): Observable<any>{
    return this.http.get('https://fathomless-gorge-56842.herokuapp.com/')
  };
  showURL (original_url: string, short_url: string): Observable<any>{
    return this.http.get('https://fathomless-gorge-56842.herokuapp.com/')
  }
}
