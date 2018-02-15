import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {addDays, addHours, endOfDay, endOfMonth, isSameDay, isSameMonth, startOfDay, subDays} from 'date-fns';
import {Subject} from 'rxjs/Subject';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent} from 'angular-calendar';
import {DisplayReservationConverterService} from "../services/display-reservation-converter.service";
import {DataService} from "../services/data.service";
import {errorToast, successToast} from "../../toast";
import {Router} from "@angular/router";
import {RentalEvent, Reservation} from "../../datatypes";
import {DetailsModalComponent} from "../common/details-modal/details-modal.component";
import {ConfirmationModalComponent} from "../common/confirmation-modal/confirmation-modal.component";

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [DisplayReservationConverterService]
})
export class CalendarComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: string = 'month';

  viewDate: Date = new Date();
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  constructor(private modal: NgbModal, private displayReservationConverter: DisplayReservationConverterService,
              private dataService: DataService, private router: Router) {

  }

  ngOnInit(): void {
    this.reload();
  }

  private reload() {
    this.dataService.getReservations()
      .then(reservations => {
        this.events = reservations.map(reservation => this.displayReservationConverter.convert(reservation, this.actions))
        this.refresh.next()
      })
      .catch(error => errorToast(error));
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({event}: { event: RentalEvent }): void => {
        this.router.navigate(['/reservationEdit/' + event.id])
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({event}: { event: RentalEvent }): void => {
        this.openRemoveModal(event.id)
      }
    }
  ];

  openRemoveModal(id) {
    const modalRef = this.modal.open(ConfirmationModalComponent);
    modalRef.componentInstance.content = `Are you sure that you want to remove this ${this.getName().toLowerCase()}?`;
    modalRef.result
      .then((result) => {if(result) this.onRemove(id)})
      .catch(error => errorToast('Could not remove reservation'))
  }

  onRemove(reservationId: number) {
    this.dataService.removeReservation(reservationId)
      .then((message) => {
        successToast('Removed successfully');
        this.reload()
      })
      .catch((error) => errorToast(error))
  }

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = {event, action};
    this.modal.open(this.modalContent, {size: 'lg'});
  }

  reservationClicked(action: string, event: RentalEvent) {
    this.dataService.getReservation(event.id).then((reservation) => {
        const modalRef = this.modal.open(DetailsModalComponent);
        modalRef.componentInstance.keys = this.getKeys();
        modalRef.componentInstance.values = this.getValues(reservation);
        modalRef.componentInstance.title = this.getName();
    })

  }

  getKeys() {
    return [
      'status',
      'place_to_rent',
      'person',
      'no_of_people',
      'from_date',
      'to_date',
      'advance_payment'
    ]
  }

  getValues(reservation: Reservation) {
    return [
      reservation.status.status,
      reservation.place_to_rent.name,
      reservation.person.name,
      reservation.no_of_people,
      reservation.from_date,
      reservation.to_date,
      reservation.advance_payment,
    ]
  }

  getName() {
    return 'Reservation'
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
}
