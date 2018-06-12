import { TicketsService } from './list-tickets/shared/services/tickets/tickets.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { HttpModule } from '@angular/http';
import { UserService } from './shared/services/user/user.service';
import { APIHelper } from './shared/services/api-helper/api-helper.service';
import { TicketComponent } from './list-tickets/shared/components/ticket/ticket.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { StorageService } from './shared/services/storage/storage.service';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListTicketsComponent,
    TicketComponent,
    LoginComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    APIHelper,
    StorageService,
    UserService,
    TicketsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
