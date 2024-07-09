import { Component, OnInit } from '@angular/core';
import { ModalService } from '../my-service.service';

@Component({
  selector: 'app-game-comp',
  templateUrl: './game-comp.component.html',
  styleUrls: ['./game-comp.component.css'],
})
export class GameCompComponent implements OnInit {
  buttonText: string = 'Bet'; // Initial button text
  isClicked: boolean = false; // Flag to track button click
  title = 'Stake';
  totalBoxes = 25;
  mines = 0;
  totalMines = 0; // Default number of mines
  count = 0;
  bombIndices: number[]; // Array to hold indices of bombs
  diamondIndices: number[];
  modalService: ModalService;
  // : number[]; // Array to hold box indices
  boxIndices: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  boxStates: ('unclicked' | 'diamond' | 'bomb')[]; // Array to track box states
  gameOver: boolean = false; // Flag to track game over state
  gameStarted: boolean = false; // Flag to track if game has started
  bombIndexArray: any;
minesOptions: any;
betAmount: any;

  constructor(private _modalService: ModalService) {
    this.modalService = _modalService;

    // Initialize boxIndices with numbers from 0 to 24
    this.boxIndices = Array.from(
      { length: this.totalBoxes },
      (_, index) => index
    );

    // Initialize boxStates with 'unclicked' for each box
    this.boxStates = new Array(this.totalBoxes).fill('unclicked') as (
      | 'unclicked'
      | 'diamond'
      | 'bomb'
    )[];
  }

  ngOnInit(): void {}

  toggleButtonText(): void {
    this.isClicked = !this.isClicked;
    this.buttonText = this.isClicked ? 'Cashout' : 'Bet';
    this.startGame();
  }
  startGame() {
    if (this.mines > 0 && this.mines <= this.totalBoxes) {
      this.bombIndexArray = this.generateUniqueRandomNumbers(this.mines);
      console.log(
        'Bomb Indices:',
        this.bombIndexArray.sort((a, b) => a - b)
      );

      // Initialize game logic
      this.initializeGame();
      this.gameStarted = true;
    } else {
      console.error(
        'Invalid number of mines. Mines should be between 1 and 25.'
      );
    }
  }

  initializeGame() {
    // Generate random bomb indices
    this.bombIndices = [];
    while (this.bombIndices.length < this.totalMines) {
      const randomIndex = Math.floor(Math.random() * this.totalBoxes);
      if (!this.bombIndices.includes(randomIndex)) {
        this.bombIndices.push(randomIndex);
      }
    }

    // Generate diamond indices excluding bomb indices
    this.diamondIndices = this.boxIndices.filter(
      (index) => !this.bombIndices.includes(index)
    );
  }

  // Function to generate an array of n unique random numbers between 0 to 24
  generateUniqueRandomNumbers(n: number): number[] {
    if (n > 25) {
      throw new Error(
        'Cannot generate more unique numbers than the range allows.'
      );
    }

    let uniqueNumbers: Set<number> = new Set();

    while (uniqueNumbers.size < n) {
      let randomNumber = Math.floor(Math.random() * 25);
      uniqueNumbers.add(randomNumber);
    }

    return Array.from(uniqueNumbers);
  }

  // Example usage:

  boxClicked(index: number) {
    if (
      this.gameStarted &&
      !this.gameOver &&
      this.boxStates[index] === 'unclicked'
    ) {
      if (this.bombIndexArray.includes(index)) {
        // Game over logic
        console.log('Game Over! You clicked on a bomb.');
        this.boxStates[index] = 'bomb';
        this.gameOver = true;
        this.modalService.openModal('gameOver'); // Open modal when bomb is clicked
      } else if (this.diamondIndices.includes(index)) {
        // Diamond found logic
        console.log('You found a diamond!');
        this.boxStates[index] = 'diamond';
        this.count++;
        if (this.count === this.totalBoxes - this.bombIndexArray.length) {
          console.log(this.bombIndexArray.length);
          console.log('Congratulations! You found all the diamonds.');
          this.modalService.openModal('win');
          this.gameOver = true;
        }
      }
    }
  }
}
