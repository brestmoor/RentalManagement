import {Component, OnInit} from '@angular/core';
import {Guest} from "../../../datatypes";
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {arrayToSpaceSeparated, getKeysInRange, getValuesInRange, isBooleanType} from "../../../utils";
import {Location} from '@angular/common';
import {successToast} from "../../../toast";

@Component({
  selector: 'app-guest-edit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.css']
})
export class GuestEditComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute, private location: Location) {
  }

  guest: Guest;

  goBack() {
    this.location.back()
  }

  save(guest: Guest) {
    this.guest = guest;
    this.dataService.modifyGuest(this.guest)
      .then(resp => {
        successToast('Saved successfully')
      })
      .catch(error => console.log(error))
  }

  private getGuest() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.dataService.getGuest(id).then(guest => this.guest = guest)
      .catch(reason => alert(reason))
  }

  ngOnInit() {
    this.getGuest()
  }

}
