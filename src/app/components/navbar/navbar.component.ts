import { Component, OnInit } from '@angular/core';

import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any;
  loggedIn: boolean = false;
  firstName: string = '';
  imgUrl: string = '';
  fullName: String = '';

  photoStyle = {
    width: '24px',
    height: '24px',
  };

  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    localStorage.getItem('firstName')
      ? this.loadFromStorage()
      : this.sendG_Auth();
  }

  loadFromStorage() {
    this.loggedIn = true;
    this.firstName = localStorage.getItem('firstName')!;
    this.imgUrl = localStorage.getItem('imgUrl')!;
    this.fullName = localStorage.getItem('fullName')!;
  }

  sendG_Auth() {
    this.authService.authState.subscribe((user) => {
      this.user = user;

      localStorage.setItem('firstName', this.user.firstName);
      localStorage.setItem('imgUrl', this.user.photoUrl);
      localStorage.setItem('fullname', this.user.name);

      this.loadFromStorage();
    });
  }

  logOut() {
    localStorage.clear();
    this.loggedIn = false;
    location.reload();
  }
}
