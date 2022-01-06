import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';

const routes: Routes = [
  { path: 'stopwatch', component: StopwatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
