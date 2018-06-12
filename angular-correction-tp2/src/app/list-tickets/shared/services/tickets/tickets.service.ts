import { Ticket } from './../../models/ticket.class';
import { MOCK_TICKETS } from './../../mock/ticket.mock';
import {Injectable} from '@angular/core';

@Injectable()
export class TicketsService {
    public tickets: Ticket[];

    constructor() {
        this.tickets = [];

        MOCK_TICKETS.forEach((ticket) => {
            this.tickets.push(new Ticket(ticket));
        });
    }

    getAllTickets(): Promise<Ticket[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.tickets);
            }, 1500);
        });
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
