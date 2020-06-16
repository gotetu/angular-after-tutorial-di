import { Injectable } from '@angular/core';
import { config } from '../config';

const appConfig: AppConfig = {
  appTitle: config.appTitle,
  appNumber: config.appNumber,
  appDate: config.appDate,
};

@Injectable({
  providedIn: 'root',
  useValue: appConfig
})
export abstract class AppConfig {
  readonly appTitle: string;
  readonly appNumber: number;
  readonly appDate: Date;
}
