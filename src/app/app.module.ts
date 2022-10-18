import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { AppComponent } from './app.component';
import { CustomRangePickerComponent } from './custom-range-picker/custom-range-picker.component';
import { RangePickerComponent } from './range-picker/range-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomRangePickerComponent,
    RangePickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NzDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
