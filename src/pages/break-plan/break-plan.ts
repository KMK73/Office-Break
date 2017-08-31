import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-break-plan',
  templateUrl: 'break-plan.html'
})
export class BreakPlanPage {

    
  currentUser = {} as firebase.User; 
  breakTimes$: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private afAuth: AngularFireAuth,public actionSheetCtrl: ActionSheetController, 
    private toast: ToastController, private afDB: AngularFireDatabase) {

      this.currentUser = afDB.app.auth().currentUser;
      console.log(this.currentUser); 

      //get latest breaks list 
      this.breakTimes$ = afDB.list('/break_times');
   
      
  }

  setBreakTime() {
    let prompt = this.alertCtrl.create({
      title: 'Break Time',
      message: "Enter a time to be reminded for your break",
      inputs: [
        {
          name: 'break_time',
          placeholder: 'Time'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            // this.breaks.push({
            //   exercise: data.exercise
            // });
            this.afDB.database.ref('break_times/' + this.currentUser.uid).set({
              time: data.break_time
            });
          }
        }
      ]
    });
    prompt.present();
  }


}
