import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {getKeysInRange, getValuesInRange} from "../../../utils";
import {successToast} from "../../../toast";

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {

  constructor(private dataService: DataService) {
  }

  @Input()
  object: {};

  @Output()
  saved = new EventEmitter<{}>();

  @Output()
  back = new EventEmitter<boolean>();

  getKeys() {
    return getKeysInRange(this.object, 2, Object.keys(this.object).length)
  }

  getValues() {
    return getValuesInRange(this.object, 2, Object.values(this.object).length);
  }

  isBoolean(obj: any) {
    return typeof obj === "boolean"
  }

  goBack() {
    this.back.emit(true)
  }

  save() {
    this.saved.emit(this.object)
  }
}
