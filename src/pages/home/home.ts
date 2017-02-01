import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BookPage} from "../book/book";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    hello = {
        fname: 'Sakchai',
        lname: 'Kantada'
    };

    constructor(public navCtrl: NavController) {

    }

    gotoBook() {
        let data = {
            title: 'goto Book',
            name: 'Book Page'
        };
        this.navCtrl.push(BookPage, data);
    }

}
