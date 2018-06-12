import {Injectable} from '@angular/core';
import {User} from '../../class/user/user';

@Injectable()
export class StorageService {

    constructor() {
    }

    public get({key}: { key: string }): Promise<string> {
        return new Promise((resolve) => {
            resolve(window.localStorage.getItem(key));
        });
    }

    public set({key, value}: { key: string, value: string }): Promise<boolean> {
        return new Promise((resolve) => {
            window.localStorage.setItem(key, value);
            resolve(true);
        });
    }
}
