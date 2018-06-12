import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../shared/providers/user/user.service';
import {TicketsService} from './shared/providers/tickets/tickets.service';
import {LinkMenu} from './shared/models/link-menu.enum';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [
        TicketsService
    ]
})
export class HomeComponent implements OnInit {
    @Output() event: EventEmitter<string> = new EventEmitter<string>();
    constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
    }

    clickMenu(link: LinkMenu): void {
        if (link == LinkMenu.addTicket) {
            this.router.navigate(['./ticket/add'], {relativeTo: this.activatedRoute});
        }

        else if (link == LinkMenu.disconnect) {
            this.userService.disconnect().then((res) => {
                if (res) {
                    this.router.navigate(['/login']);
                }
            });
        }

        else if (link == LinkMenu.listTickets) {
            this.router.navigate(['./list-tickets'], {relativeTo: this.activatedRoute});
        }
    }
}
