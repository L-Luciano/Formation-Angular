import {ListTicketsComponent} from './list-tickets/list-tickets.component';
import {AddTicketComponent} from './add-ticket/add-ticket.component';
import { Route } from '@angular/router';
/**
 * Created by sisi on 17/08/2017.
 */

export const HOME_ROUTES: Route[] = [
    {
        component: ListTicketsComponent,
        path: 'list-tickets'
    },
    {
        component: AddTicketComponent,
        path: 'ticket/add'
    },
    {
        component: AddTicketComponent,
        path: 'ticket/edit/:idTicket'
    },
    {
        redirectTo: 'list-tickets',
        path: '**'
    }
];

