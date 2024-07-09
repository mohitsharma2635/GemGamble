// src/app/session.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  // Set session data
  setSessionData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Get session data
  getSessionData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Clear session data
  clearSessionData(key: string) {
    localStorage.removeItem(key);
  }
}
