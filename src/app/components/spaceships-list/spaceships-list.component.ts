import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/shared/api/api.service';
import { Starship } from 'src/shared/starships';
import { StarshipDetailModalComponent } from '../starship-detail-modal/starship-detail-modal.component';

interface DialogData {
  email: string;
}

@Component({
  selector: 'app-spaceships-list',
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.css']
})
export class SpaceshipsListComponent implements OnInit {
  email: string | undefined;
  StarshipsData: any = [];
  dataSource!: MatTableDataSource<Starship>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'model', 'manufacturer', 'capacity', 'action'];

  constructor(private starshipsApi: ApiService, public dialog: MatDialog) {
    this.starshipsApi.GetStarships().subscribe(data => {
      this.StarshipsData = data;
      this.StarshipsData = this.StarshipsData.results;
      this.dataSource = new MatTableDataSource<Starship>(this.StarshipsData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  openDialog(element: undefined): void {
    console.log(element);
    const dialogRef = this.dialog.open(StarshipDetailModalComponent, {
      data: {starship: element}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });



  }


}
