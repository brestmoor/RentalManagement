import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {
  Guest, Place, Reservation, ReservationWithPersonOnly,
  ReservationWithRelationshipsAsId, StatusChoice
} from "../../../datatypes";
import {ActivatedRoute} from "@angular/router";
import {errorToast, successToast} from "../../../toast";
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Rx'
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/do";
import "rxjs/add/operator/switchMap";
import {GuestSearchService} from "../../services/guest-search.service";
import "rxjs/add/operator/catch";
import {of} from "rxjs/observable/of";
import {ExposingKeys, ExposingValues} from "../../common/ExposingKeysAndValues";
import {Mixin} from "../../common/mixin";


@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {

  reservation: Reservation;

  private places: Place[];
  private statusChoices: StatusChoice[] = [];

  private searching: boolean = false;
  private searchFailed: boolean;
  private hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private dataService: DataService, private guestSearchService: GuestSearchService, private route: ActivatedRoute, private location: Location) { }

  private getReservation() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getReservation(id)
      .then(reservation => this.reservation = reservation)
      .catch(reason => errorToast("fetch failed" + reason));
  }

  private getPlaces() {
    this.dataService.getPlaces()
      .then(places => this.places = places)
      .catch(error => errorToast("Could not fetch places"));
  }

  private getStatusChoices() {
    this.dataService.getStatusChoices()
      .then(statusChoices => this.statusChoices = statusChoices)
      .catch(error => errorToast("Could not fetch status choices"));
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this.guestSearchService.getGuests(term)
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return of([]);
          }))
      .do(() => this.searching = false)
      .merge(this.hideSearchingWhenUnsubscribed);


  inputFormatter = (guest: Guest) => {return `${guest.name} ${guest.surname}`};

  save() {
    const reservationWithRelAsIds = ReservationWithRelationshipsAsId.from(this.reservation);
    reservationWithRelAsIds.person_id = this.reservation.person.id;
    reservationWithRelAsIds.place_to_rent_id = this.reservation.place_to_rent.id;
    this.dataService.modifyReservation(reservationWithRelAsIds)
      .then(resp => {
        successToast('Saved successfully')
      })
      .catch(error => errorToast(error))
  }

  byId(place1: any, place2: any) {
    return place1 && place2 ? place1.id === place2.id : place1 === place2;
  }

  ngOnInit() {
    this.getReservation();
    this.getPlaces();
    this.getStatusChoices();
  }
  goBack() {
    this.location.back()
  }

  isDate(obj) {

  }

  getKeys() {
    return [
      'from_date',
      'to_date',
      'status',

      'advance_payment',
      'no_of_people',
      'person',
      'place_to_rent'
    ]
  }

}
