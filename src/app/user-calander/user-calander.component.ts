import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-calander',
  templateUrl: './user-calander.component.html',
  styleUrls: ['./user-calander.component.css']
})
export class UserCalanderComponent implements OnInit {

  public minDate: Date = new Date();
  public maxDate: Date = new Date ('04/18/2090');
  public dateValue: Date = new Date();
  onlyDate = '';

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
    this.onlyDate = $event.toLocaleString();
    this.onlyDate = (this.onlyDate.split(','))[0];
    console.log(this.onlyDate);
  }
}
