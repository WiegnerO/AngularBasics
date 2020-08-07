import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public myId ="testID";
  public isDisabledtrue=true;
  public isDisabledfalse=false;
  public successClass = "text-success";
  public hasError = true;
  public hasNoError = false;
  public isSpecial = true;
  public highlightColor = "pink";
  public greeting = "";
  public greetingnew = "";
  public greeting2 = "";
  public greeting3 = "";
  public nametwo = "Type in here to see two way binding" 

  public titleStyles = {
    color : "blue",
    fontStyle : "italic"
  }

  public messageClasses = {
    "text-success": !this.hasError,
    "danger-class": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("hi");
    this.greeting = 'Hello sir';
  }

  onClicknew(event){
    this.greetingnew = event.type;
  }

  logMessage(value){
    console.log(value);
    this.greeting3 = value;
  }

}
