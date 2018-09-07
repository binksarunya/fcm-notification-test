import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FcmProvider } from '../providers/fcm/fcm';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

const firebase = {
    apiKey: "AIzaSyBMR21K2flHb55DWq-sVIViuB2KrdrqvsU",
    authDomain: "testnotification-f001c.firebaseapp.com",
    databaseURL: "https://testnotification-f001c.firebaseio.com",
    projectId: "testnotification-f001c",
    storageBucket: "testnotification-f001c.appspot.com",
    messagingSenderId: "146602480244"
 }

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    FcmProvider
  ]
})
export class AppModule {}
