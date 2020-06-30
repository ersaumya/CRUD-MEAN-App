import { InjectionToken } from '@angular/core';


export interface IAppConfig {
  apiEndPoint: string;
}

export const APP_CONFIG = new InjectionToken<IAppConfig>('config');

