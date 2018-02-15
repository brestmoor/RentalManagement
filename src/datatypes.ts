import {CalendarEvent} from "angular-calendar";

export class Guest {
  constructor(public id = null,
              public name = '',
              public surname = '',
              public phone = null,
              public email = '',
              public country = '',
              public address = '',
              public plate_numbers = '',
              public car = '') {
  }
}

export class GuestShort {
  constructor (public id, public name, public surname) {}
}

export class Place {
  constructor(public id = null,
              public name = '',
              public address = '',
              public opened = null,
              public color = null,
              public square_m = null) {
  }
}

export class StatusChoice {
  constructor(public id, public status: string) {
  }
}

export class Reservation {
  constructor(public id = null,
              public from_date = null,
              public to_date = null,
              public status : StatusChoice = null,
              public advance_payment = null,
              public no_of_people = null,
              public person : Guest = null,
              public place_to_rent : Place = null) {
  }
}

export interface RentalEvent extends CalendarEvent{
  id: string;
}

export class ReservationWithRelationshipsAsId {
  constructor(public id = null,
              public from_date = null,
              public to_date = null,
              public status = null,
              public advance_payment = null,
              public no_of_people = null,
              public person_id : number = null,
              public place_to_rent_id : number = null) {
  }

  public static from(r: Reservation) {
    return new ReservationWithRelationshipsAsId(r.id, r.from_date, r.to_date, r.status, r.advance_payment, r.no_of_people)
  }
}

export class ReservationWithPersonOnly {
  constructor(public id = null,
              public from_date = null,
              public to_date = null,
              public status = null,
              public advance_payment = null,
              public no_of_people = null,
              public person : Guest = null,
              public place_to_rent_id : number = null) {
  }

  public static from(r: Reservation) {
    return new ReservationWithPersonOnly(r.id, r.from_date, r.to_date, r.status, r.advance_payment, r.no_of_people, r.person, r.place_to_rent.id)
  }
}
