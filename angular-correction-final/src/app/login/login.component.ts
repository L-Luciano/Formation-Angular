import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/providers/user/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    userForm: any;
    loadingRequest: boolean;

    constructor(private user: UserService, private router: Router) {
    }

    ngOnInit() {
        this.userForm = {
            pseudo: "admin",
            password: "password"
        };

        this.loadingRequest = false;
    }

    submitForm(): void {
        this.loadingRequest = true;

        this.user.login(this.userForm)
            .then((res) => {
                if (res) {
                    this.router.navigate(['./home']);
                } else {
                    this.loadingRequest = false;
                }
            })
            .catch((err) => {
                this.loadingRequest = false;
            });
    }
}
