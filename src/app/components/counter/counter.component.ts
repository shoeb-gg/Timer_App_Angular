import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DurationService } from '../../services/duration.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  seconds = 0;
  minutes = 0;
  hours = 0;

  constructor(private dur: DurationService) {}
  ngOnInit(): void {
    this.dur.durationUpdate$.subscribe((obj) => {
      this.seconds = obj.sec;
      this.minutes = obj.min;
      this.hours = obj.hr;
    });
  }
  neverGive = new Audio(
    '../../../assets/Rick Astley-Never Gonna Give You Up.mp3'
  );

  snp: string = 'Start';
  snpStyle: string = 'btn-success';
  stp: string = 'Stop';
  stpStyle: string = 'btn-danger';
  counterRunning = false;

  sp() {
    this.snp = this.snp == 'Start' ? 'Pause' : 'Start';
    this.snpStyle =
      this.snpStyle == 'btn-success' ? 'btn-warning' : 'btn-success';
    if (this.counterRunning == true) return;

    setInterval(() => {
      this.counterRunning = true;
      if (
        (this.seconds == 0 && this.minutes == 0 && this.hours == 0) ||
        this.snp === 'Start' ||
        this.stp === 'Reset'
      )
        return;

      if (this.hours != 0) {
        if (this.minutes != 0) {
          if (this.seconds != 0) {
            this.seconds--;
          } else {
            this.minutes--;
            this.seconds += 59;
          }
        } else {
          if (this.seconds != 0) {
            this.seconds--;
          } else {
            this.hours--;
            this.minutes += 59;
            this.seconds += 59;
          }
        }
      } else {
        if (this.minutes != 0) {
          if (this.seconds != 0) {
            this.seconds--;
          } else {
            this.minutes--;
            this.seconds += 59;
          }
        } else {
          if (this.seconds != 0) {
            this.seconds--;
          } else {
          }
        }
      }
      if (this.seconds == 0 && this.minutes == 0 && this.hours == 0) {
        this.rickRoll();
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

    this.stopRickRoll();
  }

  rickRoll() {
    this.neverGive.load();
    this.neverGive.play();
  }
  stopRickRoll() {
    this.neverGive.pause();
    this.neverGive.currentTime = 0;
  }
}
