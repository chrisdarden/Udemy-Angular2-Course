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
  clickCountArray: number[] = [];
  clickCount = 0;
  buttonClickedStatus: boolean = false;

  getUsername(): string {
    return this.userName;
  }

  constructor () { 
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
  if(!this.buttonClickedStatus && this.clickCountArray.length >= 5) {
    this.buttonClickedStatus = true;
    this.clickCount++;
    this.clickCountArray.push(this.clickCount);
    console.log("clickCount: " + this.clickCountArray.length);
    console.log("returning blue");
    return "blue";
    } 

    else if (this.clickCountArray.length < 5) {
    this.buttonClickedStatus = true;
    this.clickCount++;
    this.clickCountArray.push(this.clickCount);
    console.log("clickCount: " + this.clickCountArray.length);
  }

  // else if (this.clickCountArray.length > 0 && this.clickCountArray.length < 5) {
  //   this.buttonClickedStatus = false;
  // }

  else {
    return this.buttonClickedStatus = false;
  }
  // console.log('Click Count Array:', this.clickCountArray);
  }
}

