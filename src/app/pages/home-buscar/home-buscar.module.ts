import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeBuscarPageRoutingModule } from './home-buscar-routing.module';

import { HomeBuscarPage } from './home-buscar.page';
import { CompartidoModule } from 'src/app/compartido/compartido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeBuscarPageRoutingModule,
    CompartidoModule
  ],
  declarations: [HomeBuscarPage]
})
export class HomeBuscarPageModule {}
