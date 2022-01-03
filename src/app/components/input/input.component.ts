import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('sec') sec!: ElementRef;
  @ViewChild('min') min!: ElementRef;
  @ViewChild('hr') hr!: ElementRef;
  public wrnmsg = false;
  warningMessage = 'Thik kore likh beta';

  constructor(private dur: DurationService) {}
  ngOnInit(): void {}

  getValue(sec: string, min: string, hr: string) {
    if (sec === '') {
      this.seconds = 0;
      this.wrnmsg = false;
    } else if (parseInt(sec) > 60) {
      this.warningMessage = 'Please enter a value for seconds within 60';
      this.wrnmsg = true;
      return;
    } else {
      this.seconds = parseInt(sec);
      this.wrnmsg = false;
    }
    if (min === '') {
      this.minutes = 0;
      this.wrnmsg = false;
    } else if (parseInt(min) > 60) {
      this.warningMessage = 'Please enter a value for minutes within 60';
      this.wrnmsg = true;
      return;
    } else {
      this.minutes = parseInt(min);
      this.wrnmsg = false;
    }
    if (hr === '') {
      this.hours = 0;
      this.wrnmsg = false;
    } else if (parseInt(hr) > 999) {
      this.warningMessage = 'Please enter a value for hours within 999';
      this.wrnmsg = true;
      return;
    } else {
      this.hours = parseInt(hr);
      this.wrnmsg = false;
    }

    this.dur.setDuration(this.seconds, this.minutes, this.hours);
    this.dur.updateCounter();

    this.sec.nativeElement.value = '';
    this.min.nativeElement.value = '';
    this.hr.nativeElement.value = '';
  }
}
