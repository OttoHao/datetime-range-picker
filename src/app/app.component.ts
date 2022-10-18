import { Component } from '@angular/core';
import { DateTimeRange } from './custom-range-picker/custom-range-picker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public initialDate: DateTimeRange;

  constructor() {
    this.initialDate = this.getInitialDate();
  }

  public onDatetimeRangeChanged(datetimeRange: DateTimeRange) {
    console.log(datetimeRange);
  }

  private getInitialDate(): DateTimeRange {
    const end = new Date();
    const start = this.subscractDays(end, 7);
    end.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);
    return {
      start,
      end,
    };
  }

  private subscractDays(date: Date, days: number): Date {
    const newDate = new Date();
    newDate.setDate(date.getDate() - days);

    return newDate;
  }
}
