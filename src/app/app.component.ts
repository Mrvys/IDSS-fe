import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { Options } from 'ng5-slider';
import {FormControl, FormGroup} from '@angular/forms';

export class SendingObject {
  country: string;
  keywords: string;
  priceMin: string;
  priceMax: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {
    this.wines = [[],[],[]];
  }

  showTable = false;
  title = 'wine-recomender';
  configUrl = 'http://localhost:8080/api/keywords';
  country : any = "";
  wines: any[][];
  data: SendingObject = {
    country: null,
    keywords: null,
    priceMin: null,
    priceMax: null
  };
  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([5, 60])
  });
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1
  };

  /*private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, *!/!*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    responseType: 'text'
  };*/

  /*data: FormGroup = new FormGroup({
    keywords: new FormControl(),
    country: new FormControl(),
    priceControl: new FormControl([10,40])
  });*/

  sendToServer() {
    console.log('sending to server...');
    this.data.country = this.country;
    this.data.priceMin = this.sliderForm.value.sliderControl[0];
    this.data.priceMax = this.sliderForm.value.sliderControl[1];

    this.sendingService();
  }

  result: any;
  splitted: any[][] = [[]];

  sendingService() {
    console.log(this.data);
    return this.http.post(this.configUrl, this.data).subscribe(res => {
      this.result = res;
      this.result = this.result['result'];
      console.log(this.result);
      this.splitted[0] = this.result.split(";", 9);
      this.wines[0] = this.splitted[0].slice(0, 3);
      console.log("wines 1" , this.wines[0]);
      this.wines[1] = this.splitted[0].slice(3, 6);
      console.log("wines 2" , this.wines[1]);
      this.wines[2] = this.splitted[0].slice(6, 9);
      console.log("wines 3" , this.wines[2]);
      this.showTable = true;
    },error => {
      console.log("Error", error);
    });
  }
}
