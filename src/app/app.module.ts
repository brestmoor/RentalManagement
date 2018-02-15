import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'angular-calendar';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CalendarComponent} from './calendar/calendar.component';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from './navbar/navbar.component';
import {GuestsListComponent} from './guests-list/guests-list.component';
import {GuestComponent} from './guests-list/guest/guest.component';
import {DataTableComponent} from './common/data-table/data-table.component';
import {RowComponent} from './common/data-table/row/row.component';
import {HeaderComponent} from './common/data-table/header/header.component';
import {HttpModule} from "@angular/http";
import {DetailsModalComponent} from './common/details-modal/details-modal.component';
import {GuestEditComponent} from './guests-list/guest-edit/guest-edit.component';
import {DataService} from "./services/data.service";
import {PlacesListComponent} from './places-list/places-list.component';
import {PlaceComponent} from './places-list/place/place.component';
import {PlacesEditComponent} from './places-list/places-edit/places-edit.component';
import {DashCaseToFirstCapitalPipe} from './pipes/dash-case-to-first-capital.pipe';
import {EditTableComponent} from './common/edit-table/edit-table.component';
import {ConfirmationModalComponent} from './common/confirmation-modal/confirmation-modal.component';
import {NewPlaceComponent} from './places-list/new-place/new-place.component';
import {ReservationsListComponent} from './reservations-list/reservations-list.component';
import {ReservationComponent} from './reservations-list/reservation/reservation.component';
import {ReservationEditComponent} from './reservations-list/reservation-edit/reservation-edit.component';
import {GuestSearchService} from "./services/guest-search.service";
import {NewReservationComponent} from './reservations-list/new-reservation/new-reservation.component';
import {NewGuestModalComponent} from './reservations-list/new-guest/new-guest-modal.component';
import {NewReservationModalComponent} from './calendar/new-reservation-modal/new-reservation-modal.component';
import {DateFromBeforeDateToValidatorDirective} from './common/date-from-before-date-to-validator.directive';
import {ColorPickerModule} from "ngx-color-picker";

const routes: Routes = [
  {path: 'calendar', component: CalendarComponent},
  {path: 'guests', component: GuestsListComponent},
  {path: 'guestEdit/:id', component: GuestEditComponent},
  {path: 'places', component: PlacesListComponent},
  {path: 'placeEdit/:id', component: PlacesEditComponent},
  {path: 'newPlace', component: NewPlaceComponent},
  {path: 'newReservation', component: NewReservationComponent},
  {path: 'reservations', component: ReservationsListComponent},
  {path: 'reservationEdit/:id', component: ReservationEditComponent},
  {path: '', component: CalendarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavbarComponent,
    GuestsListComponent,
    GuestComponent,
    DataTableComponent,
    RowComponent,
    HeaderComponent,
    DetailsModalComponent,
    GuestEditComponent,
    PlacesListComponent,
    PlaceComponent,
    PlacesEditComponent,
    DashCaseToFirstCapitalPipe,
    EditTableComponent,
    ConfirmationModalComponent,
    NewPlaceComponent,
    ReservationsListComponent,
    ReservationComponent,
    ReservationEditComponent,
    NewReservationComponent,
    NewGuestModalComponent,
    NewReservationModalComponent,
    DateFromBeforeDateToValidatorDirective
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      // {enableTracing: true}
    ),
    ColorPickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    HttpModule,
    NgbModule.forRoot()
  ],
  entryComponents: [DetailsModalComponent, ConfirmationModalComponent, NewGuestModalComponent],
  providers: [DataService, GuestSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
