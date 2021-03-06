import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor( public snackBar: MatSnackBar) { }

  sucess(msg) {
    this.snackBar.open(msg, '');
  }
}
