import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  title = 'wine-recomender';
  configUrl = 'http://localhost:4200/';
  sendToServer() {
    console.log('sending to server...');

    this.sendingService();
  }

  sendingService() {
    return this.http.post(this.configUrl, null).subscribe();
  }
}
