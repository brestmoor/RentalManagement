import { Component, OnInit } from '@angular/core';
import {Place} from "../../datatypes";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places: Place[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPlaces().then(places => this.places = places)
      .catch(error => alert(error))
  }

}
