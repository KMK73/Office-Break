import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import {AngularFireAuth} from 'angularfire2/auth'; 
import {TabsPage} from '../tabs/tabs'; 

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  async login(user:User){
    //login user with firebase
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password); 
      console.log(result); 
      if(result){
        this.navCtrl.push(TabsPage); 
      }
    }catch(e){
      console.log(e);
    }
  }

  register(){
    this.navCtrl.push('RegisterPage'); 
  }

}
