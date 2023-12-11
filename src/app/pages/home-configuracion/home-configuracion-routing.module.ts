import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeConfiguracionPage } from './home-configuracion.page';

const routes: Routes = [
  {
    path: '',
    component: HomeConfiguracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeConfiguracionPageRoutingModule {}
