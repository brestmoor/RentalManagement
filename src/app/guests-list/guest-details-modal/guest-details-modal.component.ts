import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-guest-details-modal',
  templateUrl: './guest-details-modal.component.html',
  styleUrls: ['./guest-details-modal.component.css']
})
export class GuestDetailsModalComponent implements OnInit {

  @Input()
  keys: string[];

  @Input()
  values: string[];

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
