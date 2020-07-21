import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandingsComponent } from './standings/standings.component';
import { ConstructorStandingsComponent } from './constructor-standings/constructor-standings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HttpService } from './http/http.service';
import { UpdateStandingsComponent } from './update-standings/update-standings.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    ConstructorStandingsComponent,
    CalendarComponent,
    UpdateStandingsComponent,
    HomeComponent,
    NavbarComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
