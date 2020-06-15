import { InjectionToken } from '@angular/core';
import { config } from '../config';

export const APP_TITLE = new InjectionToken<string>('appTitle', {
  providedIn: 'root',
  factory: () => config.appTitle,
});