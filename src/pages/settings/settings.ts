import { Settingservice } from './../../service/settings';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
  private _settingService:Settingservice
    ) {
  }

  onToggle(toggle:Toggle){
    this._settingService.settoggleState(toggle.checked)
  }
isToggleChecked():boolean{
  return this._settingService.getToggleState();
}
}
