import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'angular-calendar';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CalendarComponent} from './calendar/calendar.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from './navbar/navbar.component';
import {GuestsListComponent} from './guests-list/guests-list.component';
import {GuestComponent} from './guests-list/guest/guest.component';
import {DataTableComponent} from './common/data-table/data-table.component';
import {RowComponent} from './common/data-table/row/row.component';
import {HeaderComponent} from './common/data-table/header/header.component';
import {HttpModule} from "@angular/http";
import {GuestDetailsModalComponent} from './guests-list/guest-details-modal/guest-details-modal.component';
import {GuestEditComponent} from './guests-list/guest-edit/guest-edit.component';
import {DataService} from "./services/data.service";
import {PlacesListComponent} from './places-list/places-list.component';
import {PlaceComponent} from './places-list/place/place.component';
import {PlacesEditComponent} from './places-list/places-edit/places-edit.component';
import {DashCaseToFirstCapitalPipe} from './pipes/dash-case-to-first-capital.pipe';
import {EditTableComponent} from './common/edit-table/edit-table.component';


const routes: Routes = [
  {path: 'calendar', component: CalendarComponent},
  {path: 'guests', component: GuestsListComponent},
  {path: 'guestEdit/:id', component: GuestEditComponent},
  {path: 'places', component: PlacesListComponent},
  {path: 'placeEdit/:id', component: PlacesEditComponent},
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
    GuestDetailsModalComponent,
    GuestEditComponent,
    PlacesListComponent,
    PlaceComponent,
    PlacesEditComponent,
    DashCaseToFirstCapitalPipe,
    EditTableComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      // {enableTracing: true}
    ),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
