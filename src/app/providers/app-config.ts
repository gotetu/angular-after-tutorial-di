import { Injectable } from '@angular/core';
import { config } from '../config';

const appConfig: AppConfig = {
  appTitle: config.appTitle,
};

@Injectable({
  providedIn: 'root',
  useValue: appConfig
})
export abstract class AppConfig {
  readonly appTitle: string;
}
