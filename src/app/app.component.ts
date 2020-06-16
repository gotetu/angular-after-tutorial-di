import { Component } from '@angular/core';
import { AppConfig } from './providers/app-config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  appTitle: string;
  constructor({appTitle}: AppConfig) {
    this.appTitle = appTitle;
  }
}
