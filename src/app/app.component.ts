import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, MenuController} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {HomePage} from '../pages/home/home';
import {BookPage} from "../pages/book/book";
import {LocalStoragePage} from "../pages/local-storage/local-storage";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage = LocalStoragePage;
    page: Array<{title: string, component: any}>;
    @ViewChild(Nav) nav: Nav;

    constructor(platform: Platform, private menu: MenuController) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });

        this.page = [
            {title: 'Home', component: HomePage},
            {title: 'Book', component: BookPage},
            {title: 'LocalStorage', component: LocalStoragePage}
        ]
    }

    openPage(page) {
        this.nav.setRoot(page.component);
        this.menu.toggle();
    }
}
