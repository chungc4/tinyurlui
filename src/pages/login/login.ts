import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HttpProvider } from '../../providers/http/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
     this.HttpProvider.loginUser.map(res => res.json()).subscribe(data =>{
       this.users = data;
     })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  newUser(){
    this.navCtrl.push(RegisterPage);
  }
}
