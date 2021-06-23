import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

interface DialogData {
  starship: any;
}

const pilots: any[] = [
  { id: 1, name: 'Pilot 1'},
  { id: 2, name: 'Pilot 2'},
  { id: 3, name: 'Pilot 3'}
];

@Component({
  selector: 'app-starship-detail-modal',
  templateUrl: './starship-detail-modal.component.html',
  styleUrls: ['./starship-detail-modal.component.css']
})



export class StarshipDetailModalComponent  {
  pilot1: any;
  pilot2: any;
  pilot3: any;
  constructor(
    public dialogRef: MatDialogRef<StarshipDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router) { 

  }

  navigateTo(value: any) {
    console.log('paso');
    this.dialogRef.close();
    this.router.navigate(['/pilot-detail']);
  }


  onNoClick(): void {
    this.dialogRef.close(); 
  }

}
