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
      this.personne = {};
    });
  }

  supprimerPersonne(id: number | undefined) {
    this.personneService.getOnePersonne(id).subscribe((resPersonne) => {
      this.personneService.deletePersonne(id).subscribe((res) => {
        this.personnes.forEach((element) => {
          if (element.num == resPersonne.num) {
            this.personnes.splice(this.personnes.indexOf(element), 1);
          }
        });
      });
    });
  }
}
