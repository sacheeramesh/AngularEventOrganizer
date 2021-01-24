import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {EventService} from '../shared/event.service';
import { AppComponent } from '../app.component';
import {DialogService} from '../shared/dialog.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listData: MatTableDataSource<any>;
  dateArray = [];
  minEventDate = '';
  noOfDays = 360000;
  displayedColumns: string[] = ['eventDes', 'startTime', 'endTime', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  public minDate: Date = new Date();
  public maxDate: Date = new Date ('04/18/2090');
  public dateValue: Date = new Date();
  onlyDate = (Date().toLocaleString()).split(',')[0];
  todayDate = (new Date()).toLocaleString().split(',')[0];

  constructor(private service: EventService,
              private mainApp: AppComponent,
              private dialogService: DialogService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getEvents().subscribe(
      list => {
        const array = list.map(item => {
          this.getDates(item.payload.val().eventDate);
          this.dateArray.push(item.payload.val().eventDate);
          console.log('----------');
          return {
            $key: item.key,
            ...item.payload.val()
          };

        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.applyDataFilter(this.onlyDate);
      });
  }

  onDelete($key) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.service.deleteEvent($key);
          this.noOfDays = 999999;
          this.loadData();
        }
    })
  }
  applyDataFilter(filterString: string) {
    this.listData.filter = filterString.trim().toLowerCase();
  }
  onEdit(row) {
    console.log('inside the edit');
    this.service.populateForm(row);
    this.mainApp.onCreate();

  }
  onChange($event) {
    console.log('inside the onchange');
    this.onlyDate = $event.toLocaleString();
    this.onlyDate = (this.onlyDate.split(','))[0];
    console.log(this.onlyDate);
    this.applyDataFilter(this.onlyDate);
    this.service.updateDate(this.onlyDate);
  }

  getDates( date: string) {
    const minimum = new Date(date);
    const today = (new Date(this.todayDate));
    console.log(minimum);
    console.log(this.todayDate);
    console.log(minimum.valueOf() - today.valueOf() );
    console.log(this.noOfDays);
    if ((minimum.valueOf() - today.valueOf() ) === 0) {
      this.minEventDate = 'Today !';
      this.noOfDays = 0;
    }
    if ((minimum.valueOf() - today.valueOf() ) < (this.noOfDays * 86400000)) {
      this.noOfDays = (minimum.valueOf() - today.valueOf() ) / 86400000;
      this.minEventDate = 'on ' + minimum.toDateString() + ' in ' + this.noOfDays + ' Days !';
    }

  }
}
