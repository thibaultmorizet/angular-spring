import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.css']
})
export class DetailsPersonneComponent {
  @Input() personne: Personne = {}
  @Output() message = new EventEmitter<Personne>();
  constructor(private personneService: PersonneService) { }
  supprimerPersonne() {
    this.personneService.removePersonne(this.personne.num ?? 0).subscribe({
      next: (res) => {
        alert("Suppression effectuée avec succès")
        this.message.emit(this.personne)
      },
      error: (erreur) => alert("Suppression impossible")
    });



  }
}