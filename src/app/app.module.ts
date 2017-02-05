import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {BookPage} from '../pages/book/book';
import {LocalStoragePage} from '../pages/local-storage/local-storage';

import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';

/*
export const firebaseConfig = {
    apiKey: "AIzaSyAAyVKGOiYgdWmHl4BxKeTzGYyW9U_qpYY",
    authDomain: "ionic2-firebase-ef4f2.firebaseapp.com",
    databaseURL: "https://ionic2-firebase-ef4f2.firebaseio.com",
    storageBucket: "ionic2-firebase-ef4f2.appspot.com",
    messagingSenderId: "744511720786"
}
*/
@NgModule({
    declarations: [
        MyApp,
        HomePage,
        BookPage,
        LocalStoragePage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        //AngularFireModule.initializeApp(firebaseConfig)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        BookPage,
        LocalStoragePage
    ],
    providers: [
        Storage,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
    ]
})
export class AppModule {
}
