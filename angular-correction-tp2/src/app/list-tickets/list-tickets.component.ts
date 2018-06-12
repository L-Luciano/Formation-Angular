import { TicketsService } from './shared/services/tickets/tickets.service';
import { MOCK_TICKETS } from './shared/mock/ticket.mock';
import { Ticket } from './shared/models/ticket.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  public tickets: Ticket[];
  public loading: boolean;

  constructor(private ticketsService: TicketsService) { }

  ngOnInit() {
    this.tickets = [];
    this.loading = true;

    this.ticketsService.getAllTickets().then((res: Ticket[]) => {
      this.loading = false;
      this.tickets = res;
    });
  }

  onEdit(index: number) {
    console.log(`EDIT ${index}`);
  }

  onDelete(index: number) {
    console.log(`DELETE ${index}`);
  }
}
