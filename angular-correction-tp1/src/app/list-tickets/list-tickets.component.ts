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

  constructor() { }

  ngOnInit() {
    this.tickets = [];

    MOCK_TICKETS.forEach((ticket) => {
      this.tickets.push(new Ticket(ticket));
    });

    console.log(this.tickets);
  }

  public onEdit(index: number) {
    console.log(`EDIT ${index}`);
  }

  public onDelete(index: number) {
    console.log(`DELETE ${index}`);
  }
}
