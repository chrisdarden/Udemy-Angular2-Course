import { Component } from '@angular/core';
import { Button } from "protractor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  allowNewServer: boolean = false;
  userName: string = "";
  clicks = [];
  buttonClickedStatus: boolean = false;
  
  getUsername(): string {
    return this.userName;
  }

  constructor () { 
    
    this.buttonClickedStatus = false;
    console.log("Button clicked: " + this.buttonClickedStatus);
}

onUpdateUserName(event: any) {
  this.userName = (<HTMLInputElement>event.target).innerHTML = "";
  this.userName = (<HTMLInputElement>event.target).value; 
}

resetUserNameButtonClick(event: any) {
  console.log("clicked");
  console.log(event)
  // this.userName = (<HTMLInputElement>event.target).innerHTML = "";
  this.userName = "";

}

buttonClicked(event: any) {
  console.log("clicked");
  this.buttonClickedStatus = true;
  console.log(<HTMLInputElement>event);
  console.log("button clicked status = " + this.buttonClickedStatus);
  console.log(this.buttonClickedStatus === true ? "block" : "none");
  return this.buttonClickedStatus === true ? "block" : "none"; 
  

}

}