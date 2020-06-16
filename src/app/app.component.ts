import { Component } from '@angular/core';
import { AppConfig } from './providers/app-config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  appTitle: string;
  appNumber: number;
  appDate: Date;
  constructor({appTitle, appNumber, appDate}: AppConfig) {
    this.appTitle = appTitle;
    this.appNumber = appNumber;
    this.appDate = appDate;
  }
}
