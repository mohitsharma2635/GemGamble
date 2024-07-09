import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoServiceService } from '../UserInfoService.service';
import { UserInterface, UserResponseInterface } from '../UserInterface';
import { SessionService } from '../SessionService';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  password: string;
  email: string;
  constructor(
    private router: Router,
    private http: HttpClient,
    private userInfo: UserInfoServiceService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {}

  navigate() {
    const data = {
      email: this.email,
      password: this.password,
    };
    this.http
      .post<UserResponseInterface>(
        'https://localhost:7261/api/User/LoginMethod',
        data
      )
      .subscribe((res) => {
        console.log(res);
        if (res) {
          console.log(res);
          // this.userInfo.openModal(res.user.stake_name);
          this.sessionService.setSessionData('userInfo', res);
          this.router.navigate(['/game']);
        }
      });
  }
}
