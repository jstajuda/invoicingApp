import { SettingsComponent } from './../invoicing/settings/settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';
import { InvoicingModule } from '../invoicing/invoicing.module';
import { SettingsRepository } from '../invoicing/model/settings/settingsRepository';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    InvoicingModule
  ],
  exports: [ContactComponent],
  providers: [
    {
      provide: SettingsRepository, useFactory: () => new SettingsRepository()
    }
  ]
})
export class ContactModule { }
