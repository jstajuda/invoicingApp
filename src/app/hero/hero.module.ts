import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    IndexComponent
  ]
})
export class HeroModule { }
