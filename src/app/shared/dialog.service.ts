import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatConfirmDialogComponent} from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg) {
    return this.dialog.open( MatConfirmDialogComponent, {
      disableClose: true,
      panelClass: 'confirm-dialog-container',
      width: '390px',
      position: {top: '100px'},
      data: {
        message : msg
      }
    });
  }
}
