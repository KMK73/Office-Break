import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { Account } from "../../models/account.interface";
import {TabsPage} from '../tabs/tabs'; 
import { AuthService } from '../../providers/auth/auth'; 

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
  account = {} as Account; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  }

  async login(){
    //using auth service provider from firebase
    const result = await this.auth.loginWithEmailAndPassword(this.account);
    if(result){
      console.log(result); 
      this.navCtrl.push(TabsPage); 
    }else if (Error){
      alert(Error); 
    }
  }

  register(){
    this.navCtrl.push('RegisterPage'); 
  }

  /**
   * Connect to facebook from auth service to login user 
   */
  facebookLoginUser() {
      this.auth.loginFacebookUser().then( 
        result => {
          console.log("facebook login result: "+ result);
          if(result.uid){
            this.navCtrl.setRoot(TabsPage); 
          }
        }
      );
  }
  
}
