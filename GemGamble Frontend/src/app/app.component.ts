import { Component } from '@angular/core';
import { ModalService } from './my-service.service'; // Adjust path as per your project structure

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Stake';
  totalBoxes = 25;
  count = 0;
  bombIndex: number;
  diamondIndices: number[];
  modalService: any; // Add this line
  boxIndices: number[]; // Array to hold box indices
  boxStates: ('unclicked' | 'diamond' | 'bomb')[]; // Array to track box states
  gameOver: boolean = false; // Flag to track game over state

  constructor(private _modalService: ModalService) {
    this.modalService = _modalService; // Assign modal service instance
    this.boxIndices = Array.from(
      { length: this.totalBoxes },
      (_, index) => index
    );
    this.boxStates = new Array(this.totalBoxes).fill('unclicked') as (
      | 'unclicked'
      | 'diamond'
      | 'bomb'
    )[];
    this.initializeGame();
  }

  initializeGame() {
    this.bombIndex = Math.floor(Math.random() * this.totalBoxes);
    console.log('Bomb index:', this.bombIndex);
    this.diamondIndices = this.boxIndices.filter(
      (index) => index !== this.bombIndex
    );
  }

  boxClicked(index: number) {
    if (!this.gameOver && this.boxStates[index] === 'unclicked') {
      if (index === this.bombIndex) {
        // Game over logic
        console.log('Game Over! You clicked on a bomb.');
        this.boxStates[index] = 'bomb';
        this.gameOver = true;
        this.modalService.openModal('gameOver'); // Open modal when bomb is clicked
        // Implement further game over actions if needed
      } else if (this.diamondIndices.includes(index)) {
        // Diamond found logic
        console.log('You found a diamond!');
        this.boxStates[index] = 'diamond';
        this.count++;
        if (this.count === 24) {
          console.log('Congratulations! You found all the diamonds.');
          this.modalService.openModal('win');
          this.gameOver = true;
          // Implement further actions for finding all diamonds
        }
        // Implement further actions for finding a diamond
      } else {
        // Handle other states if necessary
      }
    }
  }
}
