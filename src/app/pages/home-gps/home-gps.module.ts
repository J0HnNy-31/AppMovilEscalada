import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeGpsPageRoutingModule } from './home-gps-routing.module';

import { HomeGpsPage } from './home-gps.page';
import { CompartidoModule } from 'src/app/compartido/compartido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeGpsPageRoutingModule,
    CompartidoModule
  ],
  declarations: [HomeGpsPage]
})
export class HomeGpsPageModule {}
