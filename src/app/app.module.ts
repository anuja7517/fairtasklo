import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairCardComponent } from './shread/component/fair-card/fair-card.component';
import { FairDashboardComponent } from './shread/component/fair-dashboard/fair-dashboard.component';
import { FairDetailsComponent } from './shread/component/fair-details/fair-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FairCardComponent,
    FairDashboardComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
