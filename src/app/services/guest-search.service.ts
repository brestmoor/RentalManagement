import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {Observable} from 'rxjs/Rx'
import {Guest} from "../../datatypes";
import {of} from "rxjs/observable/of";

@Injectable()
export class GuestSearchService {

  constructor(private dataService: DataService) { }

  getGuests(text: string):  Observable<any> {
    if(text === '') {
      return of([])
    } else {
      return this.dataService.getGuestByEitherNameOrSurname(text)
    }
  }
}
