import {Component, OnInit, ViewChild} from '@angular/core';
import {Guest, Place, Reservation, ReservationWithPersonOnly, StatusChoice} from "../../../datatypes";
import {Mixin} from "../../common/mixin";
import {ExposingKeys} from "../../common/ExposingKeysAndValues";
import {Observable} from "rxjs/Observable";
import {DataService} from "../../services/data.service";
import {GuestSearchService} from "../../services/guest-search.service";
import {Location} from "@angular/common"
import {errorToast, successToast} from "../../../toast";
import {of} from "rxjs/observable/of";
import {NewGuestModalComponent} from "../new-guest/new-guest-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
@Mixin([ExposingKeys])
export class NewReservationComponent implements OnInit {

  @ViewChild('form') form;

  isToDateAfterFromDate: boolean;
  htmlValidationPassed: boolean;

  statusChoices: StatusChoice[] = [];

  reservation: Reservation = new Reservation();
  reservationOut: ReservationWithPersonOnly;

  private places: Place[] = [];

  private searching: boolean = false;
  private searchFailed: boolean;
  private hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  canEditGuest: boolean = false;
  private submitted: boolean = false;

  constructor(private dataService: DataService, private guestSearchService: GuestSearchService, private modalService: NgbModal, private location: Location) {
  }

  switchCanEditGuest() {
    this.canEditGuest = false;
  }

  onAnyDatRelatedFieldChange() {
    if(this.reservation.from_date && this.reservation.to_date && this.reservation.place_to_rent) {
      this.askForAvailability()
    }
  }

  askForAvailability() {
    this.dataService.getAnyReservationsInRange()

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

  openNewGuestModal() {
    const modalRef = this.modalService.open(NewGuestModalComponent);
    modalRef.componentInstance.object = new Guest();
    modalRef.componentInstance.title = 'Insert new guest details';
    modalRef.result
      .then((result) => {
        if (result) {
          this.canEditGuest = true;
          this.insertGuestToReservation(result)
        }
      })
      .catch((error) => errorToast(error));
  }

  openNewGuestModalEditMode() {
    const modalRef = this.modalService.open(NewGuestModalComponent);
    modalRef.componentInstance.object = this.reservation.person;
    modalRef.componentInstance.title = 'Insert new guest details';
    modalRef.result
      .then((result) => {
        if (result) {
          this.canEditGuest = true;
          this.insertGuestToReservation(result);
        }
      })
      .catch((error) => errorToast(error));
  }

  insertGuestToReservation(guest: Guest) {
    this.reservation.person = guest
  }

  inputFormatter = (guest: Guest) => {
    return `${guest.name} ${guest.surname}`
  };

  save() {
    this.submitted = true;

    if (!this.form.form.valid) {
      this.htmlValidationPassed = false;
      return;
    }

    this.htmlValidationPassed = true;

    if(this.reservation.from_date > this.reservation.to_date) {
      this.isToDateAfterFromDate = true;
      return;
    } else {
      this.isToDateAfterFromDate = false;
    }



    const reservationWithPerson = ReservationWithPersonOnly.from(this.reservation);
    this.dataService.newReservation(reservationWithPerson)
      .then(resp => {
        successToast('Saved successfully')
      })
      .catch(error => errorToast(error))
  }


  ngOnInit() {
    this.getPlaces();
    this.getStatusChoices()
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

  goBack() {
    this.location.back()
  }

  isDate(obj) {

  }

  getObject() {
    return this.reservation
  }

  getKeys() {
  }
}
