import { Component, OnInit } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';

import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-range-picker',
  templateUrl: './range-picker.component.html',
  styleUrls: ['./range-picker.component.less']
})
export class RangePickerComponent {

  public date: any = [];
  public status: any;
  private today = new Date();
  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);
  }
  public onChange(result: any): void {
      console.log('result', result);
    this.status = 'error'
  }

  public disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > 0;

  public onCalendarChange(range: any): void {
    console.log('range', range);
    console.log('current date', this.date);
  }

  public onPanelChange(event: any): void {
    console.log('panel', event);
  }

  public onOpenChange(event: any): void {
    console.log('open', event);
  }

  public onOk(event: any): void {
    console.log('ok', event);
  }
}
