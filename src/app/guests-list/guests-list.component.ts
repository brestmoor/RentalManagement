import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Guest} from "../../datatypes";

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests-list.component.html',
  styleUrls: ['./guests-list.component.css'],
})
export class GuestsListComponent implements OnInit {

  guests: Guest[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getGuests().then((guests) => {
      this.guests = guests;
      console.log(guests)
    }
  )}

}
