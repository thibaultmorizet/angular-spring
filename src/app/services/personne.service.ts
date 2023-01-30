import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root',
})
export class PersonneService {
  url: string = 'http://localhost:8080/ws/personnes';
  constructor(private http: HttpClient) {}

  getPersonnes() {    
    return this.http.get<Personne[]>(this.url);
  }
}
