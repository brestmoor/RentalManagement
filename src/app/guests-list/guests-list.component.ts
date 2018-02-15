import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Guest} from "../../datatypes";
import {errorToast, successToast} from "../../toast";

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests-list.component.html',
  styleUrls: ['./guests-list.component.css'],
})
export class GuestsListComponent implements OnInit {

  guests: Guest[] = [];

  currentGuests: Guest[];

  page: number;

  pageSize: number = 7;

  constructor(private dataService: DataService) {
  }

  removeGuest(id: number) {
    this.dataService.removeGuest(id).then(() => {
      successToast('Removed successfully');
      this.getGuests()
    }).catch(() => {
      errorToast('Something went wrong');
      this.getGuests()
    })
  }

  ngOnInit() {
    this.getGuests();
  }

  private getGuests() {
    this.dataService.getGuests().then((guests) => {
        this.guests = guests;
        this.page = 1;
        this.currentGuests = this.getCurrentGuests()
      }
    )
  }

  private getCurrentGuests() {
    return this.guests.slice((this.page - 1) * this.pageSize, this.page  * this.pageSize);
  }

  pageChanged(page: number) {
    this.currentGuests = this.getCurrentGuests()
  }
}
