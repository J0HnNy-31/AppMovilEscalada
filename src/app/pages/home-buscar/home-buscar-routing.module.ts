import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeBuscarPage } from './home-buscar.page';

const routes: Routes = [
  {
    path: '',
    component: HomeBuscarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeBuscarPageRoutingModule {}
