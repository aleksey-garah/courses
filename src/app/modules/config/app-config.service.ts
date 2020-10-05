import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

interface AppConfig {
  apiUrl: string;
}

interface AppServerConfig {
  apiUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public apiUrl: string;

  // TODO add another version for production
  constructor() {
    const appConfig = environment.appConfig as AppConfig;
    this.apiUrl = appConfig.apiUrl;
  }
}
