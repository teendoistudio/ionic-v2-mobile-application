import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

}
