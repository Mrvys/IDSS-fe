import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export class SendingObject {
  country: number;
  keywords: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'wine-recomender';
  configUrl = 'http://localhost:8080/api/keywords';
  data: SendingObject = {
    country: 1,
    keywords: null
  };

  sendToServer() {
    console.log('sending to server...');

    this.sendingService();
  }

  sendingService() {
    return this.http.post(this.configUrl, this.data).subscribe();
  }
}
