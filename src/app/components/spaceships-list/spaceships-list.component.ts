import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/shared/api/api.service';
import { Starship } from 'src/shared/starships';

@Component({
  selector: 'app-spaceships-list',
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.css']
})
export class SpaceshipsListComponent implements OnInit {

  StarshipsData: any = [];
  dataSource!: MatTableDataSource<Starship>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['name', 'model', 'manufacturer', 'capacity', 'action'];

  constructor(private starshipsApi: ApiService) {
    this.starshipsApi.GetStarships().subscribe(data => {
      this.StarshipsData = data;
      this.StarshipsData = this.StarshipsData.results;
      console.log(this.StarshipsData[0]);
      this.dataSource = new MatTableDataSource<Starship>(this.StarshipsData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }


}
