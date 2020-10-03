import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandingsComponent } from './standings/standings.component';
import { ConstructorStandingsComponent } from './constructor-standings/constructor-standings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UpdateStandingsComponent } from './update-standings/update-standings.component';
import { HomeComponent } from './home/home.component';
import { RandomTeamComponent } from './random-team/random-team.component';
import { PenaltiesComponent } from './penalties/penalties.component';
import { LogoComponent } from './logo/logo.component';

const routes: Routes = [
  { path: 'standings', component: StandingsComponent },
  { path: 'constructor-standings', component: ConstructorStandingsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'update', component: UpdateStandingsComponent },
  { path: 'random', component: RandomTeamComponent },
  { path: 'penalties', component: PenaltiesComponent },
  { path: 'logo', component: LogoComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
