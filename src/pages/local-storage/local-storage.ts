import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'page-local-storage',
    templateUrl: 'local-storage.html',
    providers: [Storage]
})
export class LocalStoragePage {

    BookStorage: any;
    Book: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public storage: Storage) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LocalStoragePage');
    }

    onAdd() {
        let dataBook = {
            id: new Date().getTime(),
            name: 'Typescript ES5/ES6',
            price: 550
        }
        this.storage.set('Book', dataBook);
        console.log('Add Data to LocalStorage Success!');
    }

    onViewData() {
        this.storage.get('Book').then((data) => {
            this.BookStorage = data;
        })
        console.log('get Book from  LocalStorage OK!');
    }

    onDelete(key) {
        this.storage.remove(key).then((data) => {
            console.log('delete ' + key + ' Success!');
        });

    }

}
