import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from './shared/providers/user/user.service';
import {StorageService} from './shared/providers/storage/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadingRequest: boolean;

    constructor(private user: UserService, private storage: StorageService) {
    }

    ngOnInit() {
        this.loadingRequest = true;

        this.user.isLogged().then((res) => {
            this.loadingRequest = false;
        });
    }
}


