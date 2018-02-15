import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Guest} from "../../../datatypes";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ExpandableAndRemovable} from "../../common/ExpandableAndRemovable";
import {Mixin} from "../../common/mixin";
import {ExposingKeys, ExposingValues} from "../../common/ExposingKeysAndValues";

@Component({
  selector: '[app-guest]',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
@Mixin([ExposingKeys, ExposingValues])
export class GuestComponent extends ExpandableAndRemovable{

  @Input()
  guest: Guest;

  @Output()
  remove = new EventEmitter<number>();

  constructor(modalService: NgbModal) {super (modalService)}

  getName() {
    return 'Guest';
  }

  onRemove() {
    this.remove.emit(this.guest.id)
  }

  getObject() {
    return this.guest;
  }

  getKeys() {}

  getValues() {}
}
