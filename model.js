export class RandomNumber {
    constructor() {
      this.value = Math.round(Math.random() * 100); // Random number between 0-100
      this.id = Math.random().toString(36).substr(2, 9); // Unique ID
    }
  
    get Value() {
      return this.value;
    }
  }
  
  export class RandomNumberList {
    constructor() {
      this.randomNumbers = [];
    }
  
    add() {
      const randomNumber = new RandomNumber();
      this.randomNumbers.push(randomNumber);
    }
  
    sum() {
      return this.randomNumbers.reduce((acc, num) => acc + num.Value, 0);
    }
  
    deleteGreaterThan50() {
      this.randomNumbers = this.randomNumbers.filter((num) => num.Value <= 50);
    }
  }
  