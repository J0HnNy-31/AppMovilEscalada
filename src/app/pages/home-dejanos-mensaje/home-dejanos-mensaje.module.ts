import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDejanosMensajePageRoutingModule } from './home-dejanos-mensaje-routing.module';

import { HomeDejanosMensajePage } from './home-dejanos-mensaje.page';
import { CompartidoModule } from 'src/app/compartido/compartido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDejanosMensajePageRoutingModule,
    CompartidoModule
  ],
  declarations: [HomeDejanosMensajePage]
})
export class HomeDejanosMensajePageModule {}
