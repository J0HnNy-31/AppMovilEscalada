import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePrincipalPageRoutingModule } from './home-principal-routing.module';

import { HomePrincipalPage } from './home-principal.page';
import { CompartidoModule } from 'src/app/compartido/compartido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePrincipalPageRoutingModule,
    CompartidoModule
  ],
  declarations: [HomePrincipalPage]
})
export class HomePrincipalPageModule {}
