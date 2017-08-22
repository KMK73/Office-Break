import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserService{

  currentUser: User;
  constructor(public http: Http, public af: AngularFireAuth) {

  }

  setUser(user: User) {
    this.currentUser = user;
  }

  getUser() {
    // Return the observable. DO NOT subscribe here.
    return this.af.auth.currentUser;
    // Hint: you could also transform the value before returning it:
    // return this.af.auth.map(authData => new User({name: authData.name}));
  }
  
}

