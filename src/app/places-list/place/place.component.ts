import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Place} from "../../../datatypes";
import {arrayToSpaceSeparated} from "../../../utils";
import {DetailsModalComponent} from "../../common/details-modal/details-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ExpandableAndRemovable} from "../../common/ExpandableAndRemovable";
import {ExposingKeys, ExposingValues} from "../../common/ExposingKeysAndValues";
import {Mixin} from "../../common/mixin";

@Component({
  selector: '[app-place]',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
@Mixin([ExposingKeys, ExposingValues])
export class PlaceComponent extends ExpandableAndRemovable{

  @Input()
  place: Place;

  @Output()
  remove = new EventEmitter<number>();

  constructor(modalService: NgbModal) {
    super(modalService)
  }

  getKeys() {
  }

  getValues() {
  }

  getName() {
    return 'Place';
  }

  onRemove() {
    this.remove.emit(this.place.id)
  }

  getObject() {
    return this.place
  }

}
