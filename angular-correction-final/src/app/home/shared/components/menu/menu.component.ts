import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LinkMenu} from "../../models/link-menu.enum";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    @Output() clickMenu = new EventEmitter<LinkMenu>();
    public links: any[];

    constructor() {
    }

    ngOnInit() {
        this.links = [
            {display: "Liste tickets", link: LinkMenu.listTickets},
            {display: "Ajouter un ticket", link: LinkMenu.addTicket},
            {display: "Déconnexion", link: LinkMenu.disconnect}
        ];
    }

    clickLink(link: LinkMenu): void {
        this.clickMenu.emit(link);
    }
}
