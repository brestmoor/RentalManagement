import { Injectable } from '@angular/core';
import {Reservation} from "../../datatypes";

@Injectable()
export class DisplayReservationConverterService {

  constructor() { }

  public convert(reservation: Reservation, actions) {
    return {
      id: reservation.id,
      start: new Date(reservation.from_date),
      end: new Date(reservation.to_date),
      title: `${reservation.person.name} ${reservation.person.surname}`,
      color: {primary: reservation.place_to_rent.color, secondary: reservation.place_to_rent.color},
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true,
      actions: actions
    }
  }
}
