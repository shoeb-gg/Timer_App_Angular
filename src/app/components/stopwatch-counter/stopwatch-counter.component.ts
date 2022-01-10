import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch-counter',
  templateUrl: './stopwatch-counter.component.html',
  styleUrls: ['./stopwatch-counter.component.css'],
})
export class StopwatchCounterComponent implements OnInit {
  seconds = 0;
  minutes = 0;
  hours = 0;

  constructor() {}

  snp: string = 'Start';
  snpStyle: string = 'btn-success';
  stp: string = 'Stop';
  stpStyle: string = 'btn-danger';
  counterRunning = false;

  ngOnInit(): void {}

  sp() {
    this.snp = this.snp == 'Start' ? 'Pause' : 'Start';
    this.snpStyle =
      this.snpStyle == 'btn-success' ? 'btn-warning' : 'btn-success';
    if (this.counterRunning == true) return;

    setInterval(() => {
      this.counterRunning = true;
      if (this.snp === 'Start' || this.stp === 'Reset') return;

      if (this.seconds < 59) {
        this.seconds++;
      } else {
        if (this.minutes > 58) {
          this.hours++;
          this.minutes = 0;
          this.seconds = 0;
        } else {
          this.minutes++;
          this.seconds = 0;
        }
      }
    }, 1000);
  }

  stpbtn() {
    if (this.stp === 'Reset') {
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
    }
    this.stp = this.stp == 'Stop' ? 'Reset' : 'Stop';
    this.stpStyle =
      this.stpStyle == 'btn-danger' ? 'btn-primary' : 'btn-danger';
    this.snp = 'Start';
    this.snpStyle = 'btn-success';
  }
}
