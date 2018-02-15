import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Guest} from "../../../datatypes";
import {ExposingKeys} from "../../common/ExposingKeysAndValues";
import {Mixin} from "../../common/mixin";
import {isBooleanType} from "../../../utils";

@Component({
  selector: 'app-new-guest',
  templateUrl: './new-guest-modal.component.html',
  styleUrls: ['./new-guest-modal.component.css']
})
@Mixin([ExposingKeys])
export class NewGuestModalComponent implements OnInit {

  @ViewChild("form") form;

  @Input()
  title: string;

  @Input()
  object: any;

  @Output()
  newObject = new EventEmitter<Guest>();
  private submitted: boolean = false;

  constructor(public activeModal: NgbActiveModal) { }

  getObject() {
    return this.object;
  }

  isBoolean(obj) {
    return isBooleanType(obj)
  }

  getKeys(){}

  ngOnInit() {
  }

  onOkClick() {
    debugger;
    if (!this.form.form.valid) {
      this.submitted = true;
      return;
    }

    this.activeModal.close(this.object);
  }
}
