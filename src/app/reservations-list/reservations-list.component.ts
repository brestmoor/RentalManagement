import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Reservation} from "../../datatypes";
import {errorToast, successToast} from "../../toast";

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  reservations: Reservation[] = [];

  currentReservations: Reservation[];
  page: number = 1;
  pageSize: number = 7;

  ngOnInit() {
    this.getReservations();
  }

  private getReservations() {
    this.dataService.getReservations()
      .then(reservations => {
        this.reservations = reservations;
        this.currentReservations = this.getCurrentReservations();
      })
      .catch((error) => errorToast(`Something went wrong while fetching reservations. Code: ${error.status}`))
  }

  private getCurrentReservations() {
    return this.reservations.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  pageChanged(page: number) {
    this.currentReservations = this.getCurrentReservations()
  }

  onRemove(reservationId: number) {
    this.dataService.removeReservation(reservationId)
      .then((message) => {
        successToast('Removed successfully');
        this.getReservations()
      })
      .catch((error) => errorToast(error))
  }

}
