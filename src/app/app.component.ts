import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {TaskComponent} from './tasks/task/task.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
              private dialog: MatDialog
              ) {}
  title = 'Event Organizer';



  onCreate() {
    const  dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open( TaskComponent, dialogConfig );
  }




}
