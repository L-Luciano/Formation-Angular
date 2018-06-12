import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {StorageService} from '../storage/storage.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class APIHelper {
    private _url: string;

    constructor(private http: HttpClient, private storage: StorageService) {
        this._url = 'http://34.249.171.19/angular/public';
    }

    requestApi({action, method = 'GET', datas = {}}: { action: string, method?: string, datas?: any }): Promise<any> {
        const methodWanted = method.toLowerCase();
        const urlToUse = this.url + action;

        // On indique le type des datas qu'on envoie
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        let req = null;

        if (methodWanted === 'post') {
            req = this.http.post(urlToUse, datas, httpOptions);
        } else if (methodWanted === 'put') {
            req = this.http.put(urlToUse, datas, httpOptions);
        } else if (methodWanted === 'delete') {
            req = this.http.delete(urlToUse, httpOptions);
        } else {
            req = this.http.get(urlToUse, httpOptions);
        }

        return req
            .toPromise()
            .then((data) => {
                if (data.success) {
                    return data.response;
                } else {
                    console.error(data.error);
                    throw new Error(data.error);
                }
            });
    }

    get url(): string {
        return this._url;
    }
}
