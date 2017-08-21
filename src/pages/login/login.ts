import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { Account } from "../../models/account.interface";
import {TabsPage} from '../tabs/tabs'; 
import { AuthService } from '../../providers/auth/auth'; 
import { Facebook } from "@ionic-native/facebook";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService,
    private FB: Facebook) {
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
   * Login with Facebook 
   */
  // facebookLogin() {

  //     //   this.FB.login(['public_profile', 'user_friends', 'email']).then (
  //     //     (loginResponse) => {
  
  //     //         //create a credential 
  //     //         let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken); 
              
  //     //         //sync the login credentials with firebase 
  //     //         firebase.auth().signInWithCredential(credential).then((success)=>{
  //     //           console.log(JSON.stringify(success));
  //     //           if(success){
  //     //             //success
                  
  //     //           }
  //     //         }).catch(function(error) {
  //     //           console.log(error); 
  //     //           return {
  //     //             error: error
  //     //           }; 
  //     //         })
  //     //     })
  //     // }

  //     const result =  this.auth.loginWithFacebook();
  //     if(result){
  //       console.log(result); 
  //       this.navCtrl.push(TabsPage); 
  //     }else{
  //       alert(Error); 
  //     }

  //   }

    
    facebookLoginUser() {
        this.auth.loginFacebookCordova().then( 
          result => {
           console.log("facebook login result: "+ result);
            if(result.uid){
              this.navCtrl.setRoot(TabsPage); 
            }
          }
        );
    }
}
