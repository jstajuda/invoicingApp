import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
