import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personne: Personne = {}
  personnes: Personne[] = [];
  constructor(private personneService: PersonneService) { }
  ngOnInit(): void {
    this.personneService.getPersonnes().subscribe(res => {
      this.personnes = res;
    })
  }
  ajouterPersonne() {
    this.personneService.addPersonne({ ... this.personne, adresses: [] }).subscribe(res => {
      this.personnes.push(res);
      this.personne = {}
    })
  }
  supprimer(p: Personne) {
    const indice = this.personnes.findIndex(elt => elt.num == p.num);
    this.personnes.splice(indice, 1)
  }
}


