import {Component, OnInit} from '@angular/core';
import {Place} from "../../../datatypes";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Location} from '@angular/common';
import {successToast} from "../../../toast";

@Component({
  selector: 'app-places-edit',
  templateUrl: './places-edit.component.html',
  styleUrls: ['./places-edit.component.css']
})
export class PlacesEditComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute, private location: Location) {
  }

  place: Place;

  goBack() {
    this.location.back()
  }

  ngOnInit() {
    this.getPlace()
  }

  save(place: Place) {
    this.place = place;
    this.dataService.modifyPlace(this.place)
      .then(resp => {
        successToast('Saved successfully')
      })
      .catch(error => console.log(error))
  }

  private getPlace() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getPlace(id).then(place => this.place = place)
      .catch(reason => alert(reason))
  }
}
