import {Component, Input, OnInit} from '@angular/core';
import {Guest} from "../../../datatypes";
import {arrayToSpaceSeparated} from "../../../utils";


@Component({
  selector: '[app-guest]',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent {

  @Input()
  guest: Guest;

  getKeys() {
    let keys = Object.keys(this.guest).slice(2, Object.keys(this.guest).length);
    return arrayToSpaceSeparated(keys)
  }

  getValues() {
    return Object.values(this.guest).slice(2, Object.values(this.guest).length);
  }
}
