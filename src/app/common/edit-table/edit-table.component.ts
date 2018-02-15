import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Location } from '@angular/common';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {getKeysExceptId, getValuesExceptId} from "../../../utils";
import {successToast} from "../../../toast";

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {

  constructor() {
  }

  @Input()
  object: {};

  @Output()
  saved = new EventEmitter<{}>();

  @Output()
  back = new EventEmitter<boolean>();

  getKeys() {
    return getKeysExceptId(this.object)
  }

  getValues() {
    return getValuesExceptId(this.object);
  }

  changeValue(key: any, value: any) {
    this.object[key] = value
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
