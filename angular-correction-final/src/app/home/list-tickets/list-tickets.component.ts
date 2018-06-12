import {Component, OnInit} from '@angular/core';
import {TicketsService} from "../shared/providers/tickets/tickets.service";
import {Ticket} from "../shared/models/ticket";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-list-tickets',
    templateUrl: './list-tickets.component.html',
    styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
    public tickets: Ticket[];
    public loadingRequest: boolean;

    constructor(private ticketService: TicketsService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.tickets = this.ticketService.tickets;
        this.loadingRequest = false;
    }

    removeTicket(index: number): void {
        let ticket = this.ticketService.getTicket(index);

        if (confirm(`Souhaitez-vous vraiment supprimer "${ticket.name}" ?`)) {
            this.loadingRequest = true;

            this.ticketService.deleteTicket(index).then((res) => {
                if (!res) {
                    // TODO Gérer erreur
                }

                this.loadingRequest = false;
            })
        }
    }

    editTicket(index: number): void {
        this.router.navigate(['../ticket', 'edit', index], {relativeTo: this.activatedRoute})
    }
}
