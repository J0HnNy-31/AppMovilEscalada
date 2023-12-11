import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCrearPage } from './home-crear.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCrearPageRoutingModule {}
