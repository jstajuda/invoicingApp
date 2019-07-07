import { SettingsRepository } from './../model/settings/settingsRepository';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer/customer';
import { Settings } from '../model/settings/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settings: Settings;
  settingsForm: FormGroup;
  updated: boolean;

  get name() { return this.settingsForm.get('name'); }
  get taxNumber() { return this.settingsForm.get('taxNumber'); }
  get streetAddress() { return this.settingsForm.get('streetAddress'); }
  get city() { return this.settingsForm.get('city'); }
  get zipCode() { return this.settingsForm.get('zipCode'); }
  get phoneNumber() { return this.settingsForm.get('phoneNumber'); }

  constructor(
    private fb: FormBuilder,
    private settingsRepo: SettingsRepository
  ) {
    this.settings = this.settingsRepo.getSettings();
  }

  ngOnInit() {
    this.settingsForm = this.fb.group({
      name: [this.settings.name, [Validators.maxLength(255), Validators.minLength(3), Validators.required]],
      taxNumber: [this.settings.taxNumber, [Validators.minLength(10), Validators.maxLength(10)]],
      streetAddress: [this.settings.streetAddress],
      city: [this.settings.city],
      zipCode: [this.settings.zipCode],
      phoneNumber: [this.settings.phoneNumber]
    });
  }

  updateSettings() {
    Object.keys(this.settingsForm.controls).forEach(prop => {
      this.settings[prop] = this.settingsForm.get(prop).value;
    });
    this.settingsRepo.setSettings(this.settings);
    this.updated = true;
    this.settingsForm.markAsUntouched();

    setTimeout(() => {
      this.updated = false;
    }, 3000);
  }

}


