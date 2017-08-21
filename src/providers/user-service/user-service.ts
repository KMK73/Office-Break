import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "../../models/user";

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserService{

  currentUser: User;
  constructor(public http: Http) {

  }

  setUser(user: User) {
    this.currentUser = user;
  }
  
}

