import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './components/personne/personne.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { DetailsPersonneComponent } from './components/details-personne/details-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    AuthComponent,
    HeaderComponent,
    DetailsPersonneComponent
  ],
  imports: [
    BrowserModule, // modules navigateurs + CommonModule (directives et pipes prédéfinis)
    AppRoutingModule,
    HttpClientModule, // pour envoyer des requêtes HTTP
    FormsModule // pour la validation de formulaires + binding
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
