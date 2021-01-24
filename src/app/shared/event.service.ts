import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularFire2/database';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firebase: AngularFireDatabase) { }

  UserEventList: AngularFireList<any>;
  selectedDate = (new Date()).toLocaleString().split(',')[0];

  form: FormGroup = new FormGroup ({
    $key : new FormControl(null),
    eventDes : new FormControl('', Validators.required),
    startTime : new FormControl(''),
    endTime : new FormControl(''),
    eventDate: new FormControl(this.selectedDate)
  });

  updateDate(onlyDate) {
    this.selectedDate = onlyDate;
    console.log(this.selectedDate);
  }

  initFormValues() {
    this.form.setValue({
      $key : null,
      eventDes : '',
      eventDate: ''
    });
  }

  getEvents() {
    console.log('inside get events method');
    this.UserEventList = this.firebase.list('events');
    return this.UserEventList.snapshotChanges();
  }

  insertEvent(event, pEventDate: string) {
    this.UserEventList.push({
      eventDes: event.eventDes,
      startTime: event.startTime,
      endTime: event.endTime,
      eventDate: this.selectedDate
    });
    console.log('inside the insert service method');
  }

  updateEvent(event) {
    this.UserEventList.update(event.$key, {
      eventDes: event.eventDes,
      startTime: event.startTime,
      endTime: event.endTime,
      eventDate: event.eventDate
    } );
  }

  deleteEvent($key: string) {
    this.UserEventList.remove($key);
  }

  populateForm(row) {
    this.form.setValue(row);
  }
}
