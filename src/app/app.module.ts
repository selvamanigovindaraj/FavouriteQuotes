import { Settingservice } from './../service/settings';
import { QuoteService } from './../service/quotes';
import { TabsPage } from './../pages/tabs/tabs';
import { LibraryPage } from './../pages/library/library';
import { QuotesPage } from './../pages/quotes/quotes';
import { QuotePage } from './../pages/quote/quote';
import { FavoritesPage } from './../pages/favorites/favorites';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';


@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    QuotePage,
    SettingsPage,
    QuotesPage,
    LibraryPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    QuotePage,
    SettingsPage,
    QuotesPage,
    LibraryPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    Settingservice,
    QuoteService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
