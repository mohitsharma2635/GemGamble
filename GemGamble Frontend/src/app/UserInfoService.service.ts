import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoServiceService {
  username: string = '';
  amount: number = 0;

  openModal(username: string) {
    this.username = username;
  }

  constructor() {}
}
