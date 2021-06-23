import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/shared/api/api.service';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {
  PilotData: any = [];

  constructor(private starshipsApi: ApiService) {
    this.starshipsApi.GetPilot().subscribe(data => {
      this.PilotData = data;
    })    
  }

  ngOnInit(): void {
  }

}
