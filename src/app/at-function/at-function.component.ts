import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function',
  templateUrl: './at-function.component.html',
  styleUrls: ['./at-function.component.css']
})
export class AtFunctionComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    var multiplyby3 = this.makeMultiplier(3);
    console.log(multiplyby3(10));
    console.log(this.doOperationOn(8,multiplyby3));
    this.Print();
  }

  // This will bind the add method to AtFunctionComponent.prototype
  multiply(x , y) : number{
    return x * y;
  }

    // This will bind the add method to AtFunctionComponent class
    multiply2 = (x , y) : number => {
      return x * y;
    }

    makeMultiplier(multiplier){
      var myFunc = function (x)  {
        return multiplier*x;
      };
      return myFunc;
    }

    doOperationOn(x , operation){
      return operation(x);
    }

    Print = () => console.log("Hello TypeScript");


    

}
