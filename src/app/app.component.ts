import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  allowNewServer: boolean = false;
  userName: string = "";
  
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

}