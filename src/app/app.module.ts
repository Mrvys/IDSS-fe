import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormRangeSliderComponent } from './reactive-form-range-slider/reactive-form-range-slider.component';
import {Ng5SliderModule} from 'ng5-slider';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormRangeSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
