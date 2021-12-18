import { Injectable } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DurationService {
  seconds: number;
  minutes: number;
  hours: number;

  private durationSub = new Subject<any>();
  durationUpdate$ = this.durationSub.asObservable();

  constructor() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }

  setDuration(sec: number, min: number, hr: number) {
    this.seconds = sec;
    this.minutes = min;
    this.hours = hr;
  }

  updateCounter() {
    let sec = this.seconds;
    let min = this.minutes;
    let hr = this.hours;

    let obj = { sec, min, hr };

    this.durationSub.next(obj);
  }
}
