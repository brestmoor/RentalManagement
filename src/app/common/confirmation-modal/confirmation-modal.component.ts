import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  @Input()
  content: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
