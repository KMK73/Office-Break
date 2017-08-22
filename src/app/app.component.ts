import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase'; 
import { AngularFireAuth } from "angularfire2/auth";
import { TabsPage } from "../pages/tabs/tabs";

// import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;

  rootPage: any = 'LoginPage'; 

  constructor( private platform: Platform, private statusBar: StatusBar, 
    private splashScreen: SplashScreen, private aFAuth: AngularFireAuth) {

    // this.aFAuth.auth.onAuthStateChanged.subscribe((user)=>
    //  (user) {
    //     console.log('logged in user '); 
    //     // User is signed in go to Home page
    //     this.rootPage = 'TabsPage'; 

    //   } else {
    //     // No user is signed in.
    //     console.log('no user ');
    //     this.rootPage = 'LoginPage'; 
    //   }
    //   this.platformReady(); 
    // });

    this.aFAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
        // User is signed in go to Home page
        this.rootPage = TabsPage; 
      } else {
        console.log('user not logged in');
        this.rootPage = 'LoginPage'; 
      }
    });
    
  }

  platformReady() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
