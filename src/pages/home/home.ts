import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private toast: ToastController) {

  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(
      (data) => {
        if(data.email && data.uid){
          this.toast.create({
            message: `Welcome to Office Break, ${data.email}`, 
            duration: 4000,
          }).present(); 
        }else {
          this.toast.create({
            message: `Could not find authentication details.`, 
            duration: 4000,
          }).present(); 
        }
      }
    );
  }

}
