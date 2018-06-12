import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {UserService} from "../../../../shared/providers/user/user.service";

@Injectable()
export class NotLoggedGuardService implements CanActivate {

    constructor(private user: UserService, private router: Router) {
    }

    canActivate() {
        return this.user.isLogged().then((res) => {
            if (res) {
                this.router.navigate(['./home']);
                return false;
            } else {
                return true;
            }
        });
    }
}
