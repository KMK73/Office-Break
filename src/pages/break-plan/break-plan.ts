import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, ToastController, DateTime } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { BreakSetting } from "../../models/break-settings.model";

@Component({
  selector: 'page-break-plan',
  templateUrl: 'break-plan.html'
})
export class BreakPlanPage {

    
  currentUser = {} as firebase.User; 
  breakSettings$: FirebaseListObservable<any>; 
  start_time: DateTime; 
  end_time: DateTime; 


  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private afAuth: AngularFireAuth,public actionSheetCtrl: ActionSheetController, 
    private toast: ToastController, private afDB: AngularFireDatabase) {

      this.currentUser = afDB.app.auth().currentUser;
      console.log(this.currentUser); 
      /**
       * query the break_settings for uid 
       */ 
      this.breakSettings$ = afDB.list('/break_settings',{ query: { orderByChild: 'user_id', equalTo: this.currentUser.uid } });
      console.log('break times ', this.breakSettings$); 
  }

  // setBreakTime() {
  //   let prompt = this.alertCtrl.create({
  //     title: 'Break Time',
  //     message: "Enter a time to be reminded for your break",
  //     inputs: [
  //       {
  //         name: 'start_time',
  //         placeholder: 'Start Time'
  //       },
  //       {
  //         name: 'end_time',
  //         placeholder: 'End Time'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Save',
  //         handler: data => {

  //           this.afDB.database.ref('break_settings/' + this.currentUser.uid).set({
  //             user_id: this.currentUser.uid,
  //             start_time: data.start_time,
  //             end_time: data.end_time,
  //           });
            
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // }


  setBreakTime() {
    console.log(this.start_time); 
    if(this.start_time && this.end_time){

      this.afDB.database.ref('break_settings/' + this.currentUser.uid).set({
        user_id: this.currentUser.uid,
        start_time: this.start_time,
        end_time: this.end_time,
      });

    }else {
      this.toast.create({
        message: `Could not find times.`, 
        duration: 2000,
      }).present(); 
    }
   
  }
}
