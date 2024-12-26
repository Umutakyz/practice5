import { RandomNumberList } from "./model.js";
import { ViewRandomNumberList } from "./view.js";

export class Controller {
  constructor() {
    this.randomNumberList = new RandomNumberList();
    this.viewRandomNumberList = new ViewRandomNumberList(this.randomNumberList);

    // Event Listeners
    document.getElementById("generate_number").addEventListener("click", () => this.addNumber());
    document.getElementById("delete_blue").addEventListener("click", () => this.deleteBlueNumbers());
  }

  addNumber() {
    this.randomNumberList.add();
    this.viewRandomNumberList.updatePage();
  }

  deleteBlueNumbers() {
    this.randomNumberList.deleteGreaterThan50();
    this.viewRandomNumberList.updatePage();
  }
}
