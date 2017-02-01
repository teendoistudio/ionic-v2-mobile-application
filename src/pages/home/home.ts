import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BookPage} from "../book/book";
import {Book} from "../../providers/book";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Book]
})
export class HomePage {

    hello = {
        fname: 'Sakchai',
        lname: 'Kantada'
    };
    Personal: Object;

    constructor(public navCtrl: NavController, private book: Book) {

    }

    gotoBook() {

        let data = {
            title: 'goto Book',
            name: 'Book Page'
        };
        /*
        this.navCtrl.push(BookPage, data);
        console.log(this.book.CallBook());
        this.book.CallBookPromise().then((data) => {
            console.log(data);
        });
        */
        this.book.CallBookHttp().subscribe((data) => {
            this.Personal = data;
        });


    }

}
