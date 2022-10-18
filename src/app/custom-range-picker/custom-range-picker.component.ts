import { Component, EventEmitter, Input, OnChanges, Output, ViewChild, SimpleChanges } from '@angular/core';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';


export interface DateTimeRange {
  start: Date;
  end: Date;
}

@Component({
  selector: 'app-custom-range-picker',
  templateUrl: './custom-range-picker.component.html',
  styleUrls: ['./custom-range-picker.component.less']
})
export class CustomRangePickerComponent implements OnChanges {

  startValue: Date | null = null;
  endValue: Date | null = null;

  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;

  @Input() public initialDate: DateTimeRange | undefined;
  @Input() public maxDays: number = 7;
  @Input() public showTime: boolean = false;
  @Output() public datetimeRangeChanged = new EventEmitter<DateTimeRange>();

  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialDate'] && changes['initialDate'].currentValue) {
      this.startValue = this.initialDate?.start as Date;
      this.endValue = this.initialDate?.end as Date;
      this.datetimeRangeChanged.emit(this.initialDate);
    }
  }

  disabledStartDate = (startValue: Date): boolean => {
    return startValue.getTime() > Date.now();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return endValue.getTime() > Date.now();;
    }
    return endValue.getTime() <= this.startValue.getTime() || endValue.getTime() > Date.now() || endValue.getTime() > this.startValue.getTime() + this.maxDays * 24 * 60 * 60 * 1000
  };

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endDatePicker.open();
      if (this.startValue && this.endValue && this.disabledEndDate(this.endValue)) {
        this.endValue = new Date(this.startValue.getTime() + this.maxDays * 24 * 60 * 60 * 1000)

      }
    }
  }

  handleEndOpenChange(open: boolean): void {
    if (!open) {
      this.datetimeRangeChanged.emit({start: this.startValue as Date, end: this.endValue as Date})
    }
  }
}

