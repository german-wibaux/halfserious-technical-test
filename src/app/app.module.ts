import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../shared/api/api.service';
import { StarshipDetailModalComponent } from './components/starship-detail-modal/starship-detail-modal.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { PilotDetailComponent } from './components/pilot-detail/pilot-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceshipsListComponent,
    StarshipDetailModalComponent,
    PilotDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    CommonModule
  ],
  providers: [
    ApiService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [StarshipDetailModalComponent]
})
export class AppModule { }
