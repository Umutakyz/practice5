export class ViewRandomNumberList {
    constructor(randomNumberList) {
      this.randomNumberList = randomNumberList;
    }
  
    updatePage() {
      const container = document.getElementById("random_numbers");
      container.innerHTML = "";
      this.randomNumberList.randomNumbers.forEach((number) => {
        const color = number.Value > 50 ? "blue" : "red";
        const element = document.createElement("p");
        element.style.color = color;
        element.textContent = number.Value;
        container.appendChild(element);
      });
      document.getElementById("sum").textContent = this.randomNumberList.sum();
    }
  }
  