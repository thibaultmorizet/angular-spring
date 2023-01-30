import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css'],
})
export class PersonneComponent implements OnInit {
  personnes: Personne[] = [];
  constructor(private personneService: PersonneService) {}

  ngOnInit(): void {
    this.initPersonnes();
  }

  initPersonnes() {
    this.personneService.getPersonnes().subscribe(res => {
      this.personnes = res;
    });
  }
}
