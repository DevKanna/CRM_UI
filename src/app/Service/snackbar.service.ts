import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
  
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }
  durationInSeconds = 10;

  private openSnackBar(message: string, panelClass: string) {
    return this._snackBar.open(message, 'OK', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: "end",
      verticalPosition: "bottom",
      panelClass: panelClass
    });
  }

  error(message: string) {
    return this.openSnackBar(message, 'custom-error-snackbar');
  }

  success(message: string) {
    return this.openSnackBar(message, 'custom-success-snackbar');
  }
}

