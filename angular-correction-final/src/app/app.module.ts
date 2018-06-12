import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {APIHelper} from './shared/providers/api-helper/api-helper.service';
import {StorageService} from './shared/providers/storage/storage.service';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {LoggedGuardService} from './home/shared/providers/logged-guard/logged-guard.service';
import {UserService} from './shared/providers/user/user.service';
import {NotLoggedGuardService} from './login/shared/providers/not-logged-guard/not-logged-guard.service';
import {MenuComponent} from './home/shared/components/menu/menu.component';
import {ListTicketsComponent} from './home/list-tickets/list-tickets.component';
import {LoadingComponent} from './shared/components/loading/loading.component';
import {AddTicketComponent} from './home/add-ticket/add-ticket.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        MenuComponent,
        ListTicketsComponent,
        LoadingComponent,
        AddTicketComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(APP_ROUTES, {useHash: false})
    ],
    providers: [
        APIHelper,
        StorageService,
        LoggedGuardService,
        NotLoggedGuardService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
