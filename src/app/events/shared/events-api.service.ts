import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  PUBLIC_KEY = '7a223801639512aa33a05f17b668c180';
  HASH = '0cb41251b618902745425a61f26205e4';
  URL_API = `https://gateway.marvel.com:443/v1/public/events?orderBy=startDate&limit=100ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor( private http: HttpClient ) { }

  getAllEvents () : Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }
}
