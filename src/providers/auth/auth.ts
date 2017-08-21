import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireAuth} from 'angularfire2/auth'; 
import {Account} from '../../models/account.interface'; 
import firebase from 'firebase'; 
import { Facebook } from "@ionic-native/facebook";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthService {

  account: Account;
  constructor(private auth: AngularFireAuth, private FB: Facebook) {
   
  }

  /**
   * Regular login with email and password no social login 
   */
   async loginWithEmailAndPassword(account: Account){
      try{
        return {
          //return a result object with the promise 
          result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password) 
        };
      }catch(error){
        return {
          error: error
        };
      }
   }

   /**
    * Login with Facebook API 
    */
    loginFacebookUser(): Promise<firebase.User> {
      return new Promise<firebase.User>((resolve, reject) => {
        this.FB.login(['public_profile','user_friends', 'email']).then(facebookData => {
              let cred: firebase.auth.AuthCredential = firebase.auth.FacebookAuthProvider.credential(facebookData.authResponse.accessToken);
              firebase.auth().signInWithCredential(cred).then((data: firebase.User) => {
                  resolve(data);
              });
          }, error => {
              // this.loading.dismiss();
              console.error('loginFacebook: ' + error);
              // this.doAlert('loginFacebook: ' + error.message);
              reject(error); 
          });
      });
  }
    
}
