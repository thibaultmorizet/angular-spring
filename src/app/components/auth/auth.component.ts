import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user: User = { grantType: "password" }
  constructor(private as: AuthService, private router: Router, private ns: NotifyService) {}
  seConnecter() {
    this.as.login(this.user).subscribe(res => {
      this.as.saveInSession(res);
      this.ns.sendData(this.user.username ?? "")
      this.router.navigateByUrl("/personne")
    })

  }
}
