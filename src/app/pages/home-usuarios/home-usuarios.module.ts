import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeUsuariosPageRoutingModule } from './home-usuarios-routing.module';

import { HomeUsuariosPage } from './home-usuarios.page';
import { CompartidoModule } from 'src/app/compartido/compartido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeUsuariosPageRoutingModule,
    CompartidoModule
  ],
  declarations: [HomeUsuariosPage]
})
export class HomeUsuariosPageModule {}
