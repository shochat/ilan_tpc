import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { DEMO_APP_ROUTES } from "./routes";
import 'hammerjs';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { PlanComponent } from './user/plan/plan.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeeklyPlanService } from './api/rest-services/weekly-plan-service';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    PlanComponent
  ],
  imports: [
    RouterModule.forRoot(DEMO_APP_ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot()
  ],
  providers: [WeeklyPlanService],
  bootstrap: [AppComponent

  ]
})
export class AppModule { }
