import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandingsComponent } from './standings/standings.component';
import { ConstructorStandingsComponent } from './constructor-standings/constructor-standings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UpdateStandingsComponent } from './update-standings/update-standings.component';

const routes: Routes = [
  { path: 'standings', component: StandingsComponent },
  { path: 'constructor-standings', component: ConstructorStandingsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'update', component: UpdateStandingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
