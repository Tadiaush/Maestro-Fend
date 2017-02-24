import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {LoanComponent} from './clerk/loan.component';
import { UserComponent } from './user/user.component';
import {AlertModule} from 'ng2-bootstrap';
import {LoanDetailsComponent} from "./clerk/loan-details.component";



// const appRoutes : Routes = [
//   {path: 'user', component: UserComponent},
//   {path: 'clerk', component: ClerkComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    UserComponent,
    LoanDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AlertModule,
    RouterModule.forRoot([
      {
        path: ' ',
        component: AppComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'clerk',
        component: LoanComponent
      }
    ])

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
