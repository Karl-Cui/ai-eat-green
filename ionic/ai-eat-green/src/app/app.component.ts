import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
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
      url: '/grocery-list',
      icon: 'list'
    },
    {
      title: 'My Recipes',
      url: '/saved-recipes',
      icon: 'restaurant'
    },
    {
      title: 'Challenges',
      url: '/challenges',
      icon: 'trophy'
    },
    {
      title: 'Records',
      url: '/records',
      icon: 'podium'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
