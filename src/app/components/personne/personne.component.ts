import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css'],
})
export class PersonneComponent implements OnInit {
  personne: Personne = {};
  personnes: Personne[] = [];
  constructor(private personneService: PersonneService) {}

  ngOnInit(): void {
    this.initPersonnes();
  }

  initPersonnes() {
    this.personneService.getPersonnes().subscribe((res) => {
      this.personnes = res;
    });
  }
  ajouterPersonne() {
    this.personne.adresses = [];
    this.personneService.createPersonne(this.personne).subscribe((res) => {
      this.personnes.push(res);
    });
  }
  supprimerPersonne(id: number | undefined) {
    this.personneService.deletePersonne(id).subscribe((res) => {
      this.personnes.splice(this.personnes.indexOf(this.personne), 1);
    });
  }
}
