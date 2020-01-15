import { Component } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Grocery Lists',
      url: '/tabs/grocery-list',
      icon: 'list'
    },
    {
      title: 'My Recipes',
      url: '/tabs/saved-recipes',
      icon: 'restaurant'
    },
    {
      title: 'Challenges',
      url: '/tabs/challenges',
      icon: 'trophy'
    },
    {
      title: 'Records',
      url: '/tabs/records',
      icon: 'podium'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController: AlertController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async presentAlertReferral() {
    const alert = await this.alertController.create({
      header: "Refer a friend",
      subHeader: "Refer a friend and unlock rewards!",
      message:  "<ion-icon name='link'></ion-icon> EASE810522",
      buttons: [{
          text: 'Done',
          role: 'cancel',
        }]
    });

    await alert.present();
  }
}
