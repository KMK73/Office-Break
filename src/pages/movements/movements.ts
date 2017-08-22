import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../providers/user-service/user-service";
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-movements',
  templateUrl: 'movements.html'
})
export class MovementsPage {

  currentUser = {} as firebase.User; 

  constructor(public navCtrl: NavController, private aFAuth: AngularFireAuth) {
      this.currentUser = this.aFAuth.auth.currentUser; 
  }

}
