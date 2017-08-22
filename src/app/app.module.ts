import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//Firebase 
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG} from './app.firebase.config'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Facebook 
import {Facebook } from '@ionic-native/facebook'; 

//pages
import { MovementsPage } from '../pages/movements/movements';
import { BreakPlanPage } from '../pages/break-plan/break-plan';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth/auth';
import { UserService } from '../providers/user-service/user-service';
import { Http } from '@angular/http';
import { RoundProgressModule } from "angular-svg-round-progressbar/dist";

@NgModule({
  declarations: [
    MyApp,
    MovementsPage,
    BreakPlanPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RoundProgressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MovementsPage,
    BreakPlanPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    Facebook,
    AuthService,
    UserService, 
    Http
  ]
})
export class AppModule {}
