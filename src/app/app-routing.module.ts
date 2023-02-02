import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { DetailPersonneComponent } from './components/detail-personne/detail-personne.component';
import { HomeComponent } from './components/home/home.component';
import { PersonneComponent } from './components/personne/personne.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'personne', component: PersonneComponent },
  { path: 'detailPersonne/:id', component: DetailPersonneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
