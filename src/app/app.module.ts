import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputComponent } from './components/input/input.component';
import { CounterComponent } from './components/counter/counter.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { TimerComponent } from './components/timer/timer.component';
import { StopwatchCounterComponent } from './components/stopwatch-counter/stopwatch-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputComponent,
    CounterComponent,
    StopwatchComponent,
    TimerComponent,
    StopwatchCounterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
