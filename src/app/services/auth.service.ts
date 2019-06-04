import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;

  constructor(
    public navCtrl: NavController
  ) {
    console.log('Auth Service');
    this.user = {};
  }
  
  saveCredentials(user: any) {
    console.log('AuthService::Login');
    this.user = user;
    console.log('user', user);
   }

   getUser() {
     return this.user;
   }

   logout() {
    this.navCtrl.navigateRoot('/');
    this.user = {};
   }

}
