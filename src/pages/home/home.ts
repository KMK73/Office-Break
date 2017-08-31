import { Component } from '@angular/core';
import { NavController, ToastController, AlertController, ActionSheetController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'; 
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; 

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html', 
})
export class HomePage {

  //progress values
  semicircle: boolean; 
  radius: number = 125;
  
  currentUser = {} as firebase.User; 
  //office breaks
  breaks: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private afAuth: AngularFireAuth, public actionSheetCtrl: ActionSheetController, 
    private toast: ToastController, private afDB: AngularFireDatabase) {

      //get latest breaks list 
      this.breaks = afDB.list('/breaks');
      
  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(
      (data) => {
        // debugger;
        if(data.email && data.uid){
          this.toast.create({
            message: `Welcome to Office Break, ${data.email}`, 
            duration: 3000,
          }).present(); 
          //save user 
          this.currentUser = data; 
          console.log(this.currentUser); 
        }else {
          this.toast.create({
            message: `Could not find authentication details.`, 
            duration: 4000,
          }).present(); 
        }
      }
    );
  }

  addBreak(){
    let prompt = this.alertCtrl.create({
      title: 'Break Exercise',
      message: "Enter a name for this new exercise you will do on your break",
      inputs: [
        {
          name: 'exercise',
          placeholder: 'Exercise'
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
            this.breaks.push({
              exercise: data.exercise
            });
          }
        }
      ]
    });
    prompt.present();
  }

  showOptions(breakId, breakExercise) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Delete Break',
          role: 'destructive',
          handler: () => {
            this.removeBreak(breakId);
          }
        },{
          text: 'Update Exercise',
          handler: () => {
            this.updateBreak(breakId, breakExercise);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  removeBreak(breakId: string){
    this.breaks.remove(breakId);
  }

  updateBreak(breakId, breakExercise){
    let prompt = this.alertCtrl.create({
      title: 'Exercise Name',
      message: "Update the name for this exercise",
      inputs: [
        {
          name: 'exercise',
          placeholder: 'Exercise',
          value: breakExercise
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
            this.breaks.update(breakId, {
              exercise: data.exercise
            });
          }
        }
      ]
    });
    prompt.present();
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '40%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  }
}
