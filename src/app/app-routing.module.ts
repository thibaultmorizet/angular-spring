import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneComponent } from './components/personne/personne.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: "personne", component: PersonneComponent },
  { path: "auth", component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
