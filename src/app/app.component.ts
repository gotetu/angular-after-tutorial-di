import { Component, VERSION, Inject, Injector } from '@angular/core';
import { APP_TITLE } from './providers/app-title';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string;
/*
  constructor(@Inject(APP_TITLE) appTitle: string) {
    this.name = appTitle;
  }
*/
  constructor(injector: Injector) {
    this.name = injector.get(APP_TITLE);
  }
}
