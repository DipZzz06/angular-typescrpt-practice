import { Component } from "@angular/core";

export interface Dipika {
  name: string;
  id: number;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  Employee: Dipika = { id: 101, name: "dipika" };

  findPairsOfSum() {
    const arr = [2, 3, 3, 4, 5, 1, 3];

    let _arr = new Array<number>();
    let sum = 6;
    let flag: boolean = false;
    arr.forEach(x => {
      let rem = sum - x;
      if (_arr.find(y => y == rem)) {
        console.log("pair is : ", rem, x);
        flag = true;
      }
      _arr.push(x);
    });
    if (!flag) {
      console.log("No Pairs found ");
    }
  }
}
