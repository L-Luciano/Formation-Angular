import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {UserService} from "../../../../shared/providers/user/user.service";

@Injectable()
export class LoggedGuardService implements CanActivate {

    constructor(private user: UserService, private router: Router) {
    }

    canActivate() {
        return this.user.isLogged().then((res) => {
            if (res) {
                return true;
            } else {
                this.router.navigate(['./login']);
                return false;
            }
        });
    }
}
