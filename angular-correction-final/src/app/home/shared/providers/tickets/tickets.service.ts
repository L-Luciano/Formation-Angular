import {Injectable, isDevMode} from '@angular/core';
import {Ticket} from '../../models/ticket';
import {ticketMocks} from '../../mock/ticket.mock';

@Injectable()
export class TicketsService {
    public tickets: Ticket[];

    constructor() {
        this.tickets = [];

        if (isDevMode()) {
            // Je suis en dev
            ticketMocks.forEach((ticket) => {
                this.tickets.push(new Ticket(ticket));
            });
        } else {
            // Je suis en prod
            // TODO Aller récupérer les données en production
        }
    }

    getTicket(index: number): Ticket {
        return this.tickets[index];
    }

    addTicket(ticket: Ticket): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.tickets.push(ticket);
                resolve(true);
            }, 1500);
        });
    }

    editTicket({index, ticket}: { index: number, ticket: Ticket }): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.tickets[index] = ticket;
                resolve(true);
            }, 1500);
        });
    }

    deleteTicket(index: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.tickets.splice(index, 1);
                resolve(true);
            }, 1500);
        });
    }
}
