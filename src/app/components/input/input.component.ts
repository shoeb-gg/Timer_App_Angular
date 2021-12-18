import { Component, OnInit } from '@angular/core';
import { DurationService } from '../../services/duration.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  seconds = 0;
  minutes = 0;
  hours = 0;

  constructor(private dur: DurationService) {}
  ngOnInit(): void {}

  getValue(sec: string, min: string, hr: string) {
    if (sec === '') {
      this.seconds = 0;
    } else this.seconds = parseInt(sec);
    if (min === '') {
      this.minutes = 0;
    } else this.minutes = parseInt(min);
    if (hr === '') {
      this.hours = 0;
    } else this.hours = parseInt(hr);
    this.dur.setDuration(this.seconds, this.minutes, this.hours);
    this.dur.updateCounter();
  }
}
