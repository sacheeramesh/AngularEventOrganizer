import { Component, OnInit } from '@angular/core';
import { EventService} from '../../shared/event.service';
import { AppComponent } from '../../app.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(public mainApp: AppComponent, public dialog: MatDialog) { }

  eventDate = 'xxx inside events.ts date';

  setSelectedDate(date: string) {
    this.eventDate = date;
  }

  ngOnInit() {
  }




}
