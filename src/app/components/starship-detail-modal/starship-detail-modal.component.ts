import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  email: string;
}

@Component({
  selector: 'app-starship-detail-modal',
  templateUrl: './starship-detail-modal.component.html',
  styleUrls: ['./starship-detail-modal.component.css']
})
export class StarshipDetailModalComponent  {

  constructor(
    public dialogRef: MatDialogRef<StarshipDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 

  }


  onNoClick(): void {
    // this.dialogRef.close();
  }

}
