import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css']
})
export class DetailsModalComponent implements OnInit {

  @Input()
  keys: string[];

  @Input()
  values: string[];

  @Input()
  title: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
