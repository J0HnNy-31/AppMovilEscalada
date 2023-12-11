import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCrearPageRoutingModule } from './home-crear-routing.module';

import { HomeCrearPage } from './home-crear.page';
import { CompartidoModule } from 'src/app/compartido/compartido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCrearPageRoutingModule,
    CompartidoModule
  ],
  declarations: [HomeCrearPage]
})
export class HomeCrearPageModule {}
