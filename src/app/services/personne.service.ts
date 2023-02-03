import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private url: string = "http://localhost:8080/ws/personnes"
  constructor(private http: HttpClient) { }

  getPersonnes() {
    return this.http.get<Personne[]>(this.url);
  }
  addPersonne(p: Personne) {
    return this.http.post<Personne>(this.url, p);
  }
  removePersonne(num: number) {
    return this.http.delete<boolean>(`${this.url}/${num}`);
  }
}
