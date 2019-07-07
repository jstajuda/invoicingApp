import { SettingsRepository } from './../../invoicing/model/settings/settingsRepository';
import { SettingsComponent } from './../../invoicing/settings/settings.component';
import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/invoicing/model/settings/settings';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  settings: Settings;

  constructor(private settingsRepo: SettingsRepository) { }

  ngOnInit() {
    this.settings = this.settingsRepo.getSettings();
  }

}
