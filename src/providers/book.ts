import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {map} from "rxjs/operator/map";

@Injectable()
export class Book {

    constructor(public http: Http) {
        console.log('Hello Book Provider');
    }

    CallBook(){
        return "Hello CallBook Loaded!";
    }
    CallBookPromise(){
        return Promise.resolve('Hello Book Promise!');
    }
    CallBookHttp(){
        return this.http.get('http://localhost/angular2-server.php').map((res) => res.json());
    }
}
