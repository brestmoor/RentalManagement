import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Reservation} from "../../../datatypes";
import {ExpandableAndRemovable} from "../../common/ExpandableAndRemovable";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DataService} from "../../services/data.service";

@Component({
  selector: '[app-reservation]',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent extends ExpandableAndRemovable {
  @Input()
  reservation: Reservation;

  @Output()
  remove = new EventEmitter<number>();

  constructor(modalService: NgbModal, private dataService: DataService) {
    super(modalService)
  }

  getKeys() {
    return [
      'status',
      'place_to_rent',
      'person',
      'no_of_people',
      'from_date',
      'to_date',

      'advance_payment'
    ]
  }

  getValues() {
    return [
      this.reservation.status.status,
      this.reservation.place_to_rent.name,
      this.reservation.person.name,
      this.reservation.no_of_people,
      this.reservation.from_date,
      this.reservation.to_date,

      this.reservation.advance_payment,
    ]
  }

  getName() {
    return 'Reservation'
  }

  onRemove() {
    this.remove.emit(this.reservation.id);
  }

  getObject() {
    return this.reservation
  }

}
