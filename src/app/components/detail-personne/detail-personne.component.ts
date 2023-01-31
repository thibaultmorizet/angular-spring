import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css'],
})
export class DetailPersonneComponent implements OnInit {
  idPersonne: number = 0;
  personne: Personne = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personneService: PersonneService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.idPersonne = +(res.get('id') ?? '0');
      this.personneService.getOnePersonne(this.idPersonne).subscribe((pers) => {
        this.personne = pers;
      });
    });
  }

  modifierPersonne() {
    this.personneService
      .updatePersonne(this.personne.num, this.personne)
      .subscribe((elt) => this.router.navigateByUrl('/personne'));
  }
}
