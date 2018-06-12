/**
 * Created by sisi on 12/08/2017.
 */
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {LoggedGuardService} from './home/shared/providers/logged-guard/logged-guard.service';
import {NotLoggedGuardService} from './login/shared/providers/not-logged-guard/not-logged-guard.service';
import {HOME_ROUTES} from './home/home.routes';

export const APP_ROUTES = [
    {
        component: LoginComponent,
        path: 'login',
        canActivate: [NotLoggedGuardService]
    },
    {
        component: HomeComponent,
        path: 'home',
        canActivate: [LoggedGuardService],
        children: HOME_ROUTES
    },
    {
        redirectTo: 'login',
        path: '**'
    },
];

