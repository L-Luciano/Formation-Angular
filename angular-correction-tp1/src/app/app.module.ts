import {TicketComponent} from './list-tickets/shared/components/ticket/ticket.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ListTicketsComponent} from './list-tickets/list-tickets.component';


@NgModule({
    declarations: [
        AppComponent,
        ListTicketsComponent,
        TicketComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
