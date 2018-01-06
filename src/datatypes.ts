export class Guest {
  constructor(public id,
              public name,
              public surname,
              public phone,
              public email,
              public country,
              public address,
              public plate_numbers,
              public car) {
  }
}

export class Place {
  constructor(public id,
              public name,
              public address,
              public opened,
              public square_m) {
  }
}

export class Reservation {

}
