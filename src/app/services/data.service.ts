import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Guest, Place} from "../../datatypes";

@Injectable()
export class DataService {

  root_url: string = 'http://localhost:8000';

  constructor(private http: Http) { }

  getGuests() {
    return this.http.get(this.root_url + '/guests')
      .map(response => response.json())
      .map(guests => guests as Guest[])
      .toPromise()
  }

  getGuest(id: number) {
    return this.http.get(this.root_url + '/guests/' + id)
      .map(response => response.json() as Guest)
      .toPromise()
  }

  getPlaces() {
    return this.http.get(this.root_url + '/places')
      .map(response => response.json())
      .map(guests => guests as Place[])
      .toPromise()
  }

  getPlace(id: number) {
    return this.http.get(this.root_url + '/places/' + id)
      .map(response => response.json() as Place)
      .toPromise()
  }

  modifyGuest(guest: Guest) {
    return this.http.put(this.root_url + '/guests/' + guest.id + '/', guest)
      .toPromise()
  }

  modifyPlace(place: Place) {
    return this.http.put(this.root_url + '/places/' + place.id + '/', place)
      .toPromise()
  }

}
