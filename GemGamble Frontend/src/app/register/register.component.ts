import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponseInterface } from '../UserInterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  navigateToGame() {
    const data = {
      name: this.username,
      email: this.email,
      password: this.password,
    };
    this.http
      .post<UserResponseInterface>(
        'https://localhost:7261/api/User/RegisterMethod',
        data
      )
      .subscribe((res) => {
        console.log(res);
        if (res.message === 'User created') {
          this.router.navigate(['/game']);
        }
      });
  }
}
