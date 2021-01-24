import { Component, OnInit } from '@angular/core';
import {EventService} from '../../shared/event.service';
import { NotificationService } from '../../shared/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private service: EventService,
              public dialogRef: MatDialogRef<TaskComponent>) { }
  selectedDate = this.service.selectedDate;

  ngOnInit() {
  }
  onSubmit() {
    let eventDate = '';
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value) {
        this.service.insertEvent(this.service.form.value, eventDate);
      } else {
        this.service.updateEvent(this.service.form.value);
      }
      this.service.form.reset();
      this.service.initFormValues();
      this.onClose();
    }
  }
  onClear() {
    this.service.form.reset();
    this.service.initFormValues();
  }

  onClose(){
    this.service.form.reset();
    this.dialogRef.close();
  }

}
