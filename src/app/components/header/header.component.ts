import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'angular-spring';
  nom : string|null = null

  constructor(private ns: NotifyService, private as: AuthService, private router: Router) {}
  ngOnInit(): void {
    // this.nom = localStorage.getItem("nom")
    this.ns.getData().subscribe(res => {
      this.nom = res
    })
  }

  seDeconnecter() {
    this.as.clearSession()
    this.nom = null
    this.ns.sendData(null);
    this.router.navigateByUrl("/auth")
  }
}
