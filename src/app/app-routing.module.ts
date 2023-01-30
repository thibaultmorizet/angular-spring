import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonneComponent } from './components/personne/personne.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personne', component: PersonneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
