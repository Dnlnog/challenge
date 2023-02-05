import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(public auth: AuthService) {}
  src?: string;

  size = 36;
  ngOnInit(): void {
    this.auth.user$.subscribe((res) => {
      this.src = res?.picture;
    });
    return;
  }

  logout(): void {
    this.auth.logout();
  }
}
