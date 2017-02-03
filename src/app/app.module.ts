import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {BookPage} from '../pages/book/book';
import {LocalStoragePage} from '../pages/local-storage/local-storage';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        BookPage,
        LocalStoragePage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
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
