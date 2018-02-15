import { Component, OnInit } from '@angular/core';
import {Place} from "../../datatypes";
import {DataService} from "../services/data.service";
import {errorToast, successToast} from "../../toast";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places: Place[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPlaces()
  }

  getPlaces() {
    this.dataService.getPlaces()
      .then(places => this.places = places)
      .catch(error => errorToast(error))
  }

  removePlace(id: number) {
    this.dataService.removePlace(id).then(() => {
      successToast('Removed successfully');
      this.getPlaces()
    }).catch(() => {
      errorToast('Something went wrong');
      this.getPlaces()
    })
  }

}
