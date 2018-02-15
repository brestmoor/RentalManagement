import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {
  Guest, Place, Reservation, ReservationWithPersonOnly, ReservationWithRelationshipsAsId,
  StatusChoice
} from "../../datatypes";
import {map} from "rxjs/operator/map";

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
    return this.http.get(this.root_url + '/guests/' + id + '/')
      .map(response => response.json() as Guest)
      .toPromise()
  }

  getGuestByEitherNameOrSurname(text: string) {
    return this.http.get(this.root_url + '/guests/?search=' + text)
      .map(response => response.json() as Guest[])
  }

  getPlaces() {
    return this.http.get(this.root_url + '/places')
      .map(response => response.json())
      .map(places => places as Place[])
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

  removeGuest(id: number) {
    return this.http.delete(this.root_url + '/guests/' + id + '/')
      .toPromise()
  }

  removePlace(id: number) {
    return this.http.delete(this.root_url + '/places/' + id + '/')
      .toPromise()
  }

  modifyPlace(place: Place) {
    return this.http.put(this.root_url + '/places/' + place.id + '/', place)
      .toPromise()
  }

  newPlace(place: Place) {
    return this.http.post(this.root_url + '/places/', place)
      .toPromise()
  }

  getReservations() {
    return this.http.get(this.root_url + '/reservations/')
      .map((response) => response.json())
      .map(response => response as Reservation[])
      .toPromise()
  }

  getReservation(id: string) {
    return this.http.get(this.root_url + '/reservations/' + id + '/')
      .map((response) => response.json())
      .map(response => response as Reservation)
      .toPromise()
  }

  modifyReservation(reservation: ReservationWithRelationshipsAsId) {
    return this.http.put(this.root_url + '/reservations/' + reservation.id + '/', reservation)
      .toPromise()
  }


  newReservation(reservation: ReservationWithPersonOnly) {
    return this.http.post(this.root_url + '/reservations/', reservation)
      .toPromise()
  }

  removeReservation(id: number) {
    return this.http.delete(this.root_url + '/reservations/' + id)
      .toPromise()
  }

  getStatusChoices() {
    return this.http.get(this.root_url + '/reservationStatuses/')
      .map(respnse => respnse.json())
      .map(choices => choices as StatusChoice[])
      .toPromise()
  }

  getAnyReservationsInRange() {
    return this.http.get(this.root_url + '/reservations/')
      .map(respnse => respnse.json())
      .map(choices => choices as StatusChoice[])
      .toPromise()
  }
}
