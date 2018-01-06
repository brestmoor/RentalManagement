import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../../datatypes";
import {arrayToSpaceSeparated} from "../../../utils";

@Component({
  selector: '[app-place]',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input()
  place: Place;

  getKeys() {
    let keys = Object.keys(this.place).slice(2, Object.keys(this.place).length);
    return arrayToSpaceSeparated(keys)
  }

  getValues() {
    return Object.values(this.place).slice(2, Object.values(this.place).length);
  }

  constructor() { }

  ngOnInit() {
  }

}
