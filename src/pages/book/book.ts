import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
    selector: 'page-book',
    templateUrl: 'book.html'
})
export class BookPage {

    title: string;
    name: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        this.title = this.navParams.get("title");
        this.name = this.navParams.get("name");
        //console.log('ionViewDidLoad BookPage');
    }

}
