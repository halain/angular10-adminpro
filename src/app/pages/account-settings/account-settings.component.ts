import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _settingsServices: SettingsService) { }

  ngOnInit(): void {
    this._settingsServices.checkCurrentTheme();
  }


  changeTheme(theme : string){
   this._settingsServices.changeTheme(theme);
  }


  


}
