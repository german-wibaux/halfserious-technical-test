import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceshipsListComponent } from './components/spaceships-list/spaceships-list.component';

const routes: Routes = [
  { path: 'spaceships-list', component: SpaceshipsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
