import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeConfiguracionPageRoutingModule } from './home-configuracion-routing.module';

import { HomeConfiguracionPage } from './home-configuracion.page';
import { CompartidoModule } from 'src/app/compartido/compartido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeConfiguracionPageRoutingModule,
    CompartidoModule
  ],
  declarations: [HomeConfiguracionPage]
})
export class HomeConfiguracionPageModule {}
