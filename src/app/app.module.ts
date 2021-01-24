import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule,
  MatTableModule, MatToolbarModule,
  MatPaginatorModule,
  MatSortModule, MatCardModule, MatDialogModule,

} from '@angular/material';
import {CalendarModule, DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import { EventService } from './shared/event.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import {ReactiveFormsModule} from '@angular/forms';
import { environment } from '../environments/environment';
import { TasksComponent } from './tasks/tasks.component';
import { UserCalanderComponent } from './user-calander/user-calander.component';
import { TaskComponent } from './tasks/task/task.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
    TasksComponent,
    UserCalanderComponent,
    TaskComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    DatePickerModule,
    CalendarModule,
    MatCheckboxModule,
    MatTableModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,

  ],
  providers: [EventService],
  bootstrap: [AppComponent],
  entryComponents: [TaskComponent, MatConfirmDialogComponent]
})
export class AppModule { }
