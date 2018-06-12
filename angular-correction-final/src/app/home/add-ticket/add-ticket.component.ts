import { Component, isDevMode, OnInit } from '@angular/core';
import { Ticket } from "../shared/models/ticket";
import { TicketsService } from "../shared/providers/tickets/tickets.service";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ticketMocks } from "../shared/mock/ticket.mock";

@Component({
    selector: 'app-add-ticket',
    templateUrl: './add-ticket.component.html',
    styleUrls: ['./add-ticket.component.css']
})
export class    AddTicketComponent implements OnInit {
    public ticketActual: Ticket;
    public requestLoading: boolean;
    public isEdit: boolean;
    public idTicket: number;

    constructor(private ticketService: TicketsService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.requestLoading = false;

        let paramId = +this.route.snapshot.params.idTicket;

        if (paramId) {
            this.initializeEdit(paramId);
        } else {
            // On veut gagner du temps pour nos tests en prod donc on pré-rempli
            if (isDevMode()) {
                this.ticketActual = new Ticket(ticketMocks[0]);
            } else {
                this.ticketActual = new Ticket({});
            }
        }
    }

    create(): void {
        this.requestLoading = true;

        this.ticketService.addTicket(this.ticketActual).then((res) => {
            if (res) {
                this.router.navigate(['./list-tickets']);
            } else {
                this.requestLoading = false;
            }

        })
    }

    edit(): void {
        this.requestLoading = true;

        this.ticketService.editTicket({index: this.idTicket, ticket: this.ticketActual}).then((res) => {
            this.requestLoading = false;

            if (!res) {
                // TODO gérer erreur
                console.log("ERREUR");
            } else {
                this.router.navigate(['./list-tickets'], {relativeTo: this.route});
            }
        });
    }

    initializeEdit(index: number): void {
        let ticket = this.ticketService.getTicket(index);

        if (!ticket) {
            // Erreur, l'id en paramètre n'est pas bon
            this.router.navigate(['./list-tickets'], {relativeTo: this.route});
            return;
        }

        this.ticketActual = ticket.copy();
        this.isEdit = true;
        this.idTicket = index;
    }
}
