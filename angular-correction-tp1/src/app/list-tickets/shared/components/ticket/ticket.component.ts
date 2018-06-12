import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() public title: string;
  @Input() public description: string;
  @Input() public nbLefts: number;
  @Input() public urlImage: string;
  @Output() public edit = new EventEmitter();
  @Output() public delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
