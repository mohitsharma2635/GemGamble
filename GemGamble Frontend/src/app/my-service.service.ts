// modal.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpen = false;
  modalType = '';
  constructor() {}

  openModal(title: string) {
    this.isOpen = true;
    this.modalType = title;
  }

  closeModal() {
    this.isOpen = false;
  }

}
