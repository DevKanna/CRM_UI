import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public appConfig: any;
  constructor(private http: HttpClient) {
  }
  public async loadAppConfig() {
    try {
      const data = await this.http.get('./assets/config.json').toPromise();
      this.appConfig = data;
    } catch (error) {
      console.error('Error loading app config:', error);
    }
  }
  getConfig() {
    return this.appConfig;
  }
}
