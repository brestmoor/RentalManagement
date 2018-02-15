import {Component, EventEmitter, Input, Output} from '@angular/core';
import {getKeysExceptId, getValuesExceptId} from "../../../utils";

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
