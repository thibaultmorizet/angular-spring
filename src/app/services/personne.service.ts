import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  url: string = 'http://localhost:8080/ws/personnes';
  constructor(private http: HttpClient) {}

  getPersonnes() {
    let user = 'admin : admin';
    let headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(user));
    console.log(headers);

    return this.http.get<Personne[]>(this.url, { headers: headers });
  }

  getOnePersonne(id: number | undefined) {
    return this.http.get<Personne>(this.url + '/' + id);
  }

  createPersonne(personne: Personne) {
    return this.http.post<Personne>(this.url, personne);
  }

  deletePersonne(id: number | undefined) {
    return this.http.delete<{ token: string }>(this.url + '/' + id);
  }

  updatePersonne(id: number | undefined, personne: Personne) {
    return this.http.put<{ token: string }>(this.url + '/' + id, personne);
  }
}
