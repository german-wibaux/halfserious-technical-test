import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotDetailComponent } from './components/pilot-detail/pilot-detail.component';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';

const routes: Routes = [
  { path: 'spaceships-list', component: SpaceshipsListComponent },
  { path: 'pilot-detail', component: PilotDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
