import { Component, OnInit } from '@angular/core';
import { UserInfoServiceService } from '../UserInfoService.service';
import { SessionService } from '../SessionService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userInformation: string;
  username: string;
  constructor( 
    private sessionService: SessionService,
    private route: Router
  ) {
    this.userInformation = this.sessionService.getSessionData('userInfo');
  }

  ngOnInit() {}
  logout() {
    this.sessionService.clearSessionData('userInfo');
    this.route.navigate(['/login']);
  }
  //this.username= this.userInfo.username;
}
