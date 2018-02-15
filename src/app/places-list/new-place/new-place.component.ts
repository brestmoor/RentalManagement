import {Component, OnInit} from '@angular/core';
import {Place} from "../../../datatypes";
import {Location} from '@angular/common';
import {DataService} from "../../services/data.service";
import {errorToast, successToast} from "../../../toast";

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {

  place: Place = new Place();

  constructor(private location: Location, private dataService: DataService) { }

  goBack() {
    this.location.back()
  }

  save() {
    this.dataService.newPlace(this.place)
      .then(() => successToast("Successfully create a new place"))
      .catch(() => errorToast("Error during new place creation"));
  }

  ngOnInit() {
  }

}
